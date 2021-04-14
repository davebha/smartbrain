import './App.css';
import React,{Component} from 'react'
import Navigation from './components/navigation/navigation'
import Logo from './components/logo/logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js'

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
      input:''
    }
  }

  onInputChange=(event)=>{
    console.log(event.target.value)
  }
  render(){
  return (
    <div className='App'>  
      <Particles 
                params={particlesOptions} className='particles' />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm   onInputChange={this.onInputChange}/>
    {/*
    
       FaceRecognition*/}
    </div>
  );
}

}

export default App;
