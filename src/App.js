import './App.css';
import React,{Component} from 'react'
import Navigation from './components/navigation/navigation'
import SignIn from './components/SignIn/SignIn'
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
      box:{}
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

  onButtonSubmit = ()=>{
    this.setState({imageUrl:this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL,
      this.state.input)
    .then(response=>this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err=>console.log(err));
  }

  render(){
  return (
    <div className='App'>  
      <Particles 
                params={particlesOptions} className='particles' />
      <Navigation />
      <SignIn />
      <Logo />
      <Rank />
      <ImageLinkForm   onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}/>
      <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box}/>
    </div>
  );
}

}

export default App;
