import './App.css';
import React,{Component} from 'react'
import Navigation from './components/navigation/navigation'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'
import Logo from './components/logo/logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'

const app = new Clarifai.App({
  apiKey:'ac0feda55a8e4b5184bdfba3f2044970'
});
  const particlesOptions={
 particles: {
        number:{
        value:30,
        density:{
        enable:true,
        value_area:800
      }
    }              
  }
}

class App extends Component{

  constructor(){
    super();
    this.state={
      input:'',
      imageUrl:'',
      box:{},
      route:'signin',
      isSignedIn:false
    }
  }
  
  calculateFaceLocation=(data)=>{
     const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
     const image=document.getElementById('inputimage');
     const width=Number(image.width);
     const height=Number(image.height);
      console.log(width,height);

      return {
            leftCol:clarifaiFace.left_col*width,
            rightCol:width-(clarifaiFace.right_col*width),
            topRow:clarifaiFace.top_row*height,
            bottomRow:height-(clarifaiFace.bottom_row*height)
      }  
  }

  displayFaceBox=(box)=>{
    this.setState({box})
    console.log(box)
  }


  onInputChange=(event)=>{
    this.setState({input: event.target.value})
  }

  onRouteChange=(route)=>{
    if(route==='signout'){
      this.setState({isSignedIn:false})
    }else if(route==='home'){
      this.setState({isSignedIn:true})
    }
    this.setState({route:route})
  }
  onButtonSubmit = ()=>{
    this.setState({imageUrl:this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL,
      this.state.input)
    .then(response=>this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err=>console.log(err));
  }

  render(){
  const {isSignedIn,imageUrl,box,route}=this.state;
  return (
    <div className='App'>  
      <Particles 
                params={particlesOptions} className='particles' />
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
     

      {route==='home'
        ?
        <div>
          <Logo />
          <Rank />
          <ImageLinkForm   onInputChange={this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit}/>
          <FaceRecognition imageUrl={imageUrl} box={box}/>
        </div>
      :(route==='signin'
        ?
        <SignIn onRouteChange={this.onRouteChange} />
        :
        <Register onRouteChange={this.onRouteChange} />
       )
      }
    </div>
  );
}

}

export default App;
