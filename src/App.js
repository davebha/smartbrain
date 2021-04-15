import './App.css';
import React,{Component} from 'react'
import Navigation from './components/navigation/navigation'
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
      imageUrl:''
    }
  }

  onInputChange=(event)=>{
    this.setState({input: event.target.value})
  }

  onButtonSubmit = ()=>{
    this.setState({imageUrl:this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL,
      this.state.input).then(
      function(response){
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box)

      },function(err){

      }
      );
  }
  render(){
  return (
    <div className='App'>  
      <Particles 
                params={particlesOptions} className='particles' />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm   onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}/>
      <FaceRecognition imageUrl={this.state.imageUrl}/>
    </div>
  );
}

}

export default App;
