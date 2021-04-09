import './App.css';
import React,{Component} from 'react'
import Navigation from './components/navigation/navigation'
import Logo from './components/logo/logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js'

  const particlesOptions={
                particles: {
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "#3CA9D1",
                      blur: 5
                    }
                  }
                }
              }

class App extends Component{

  render(){
  return (
    <div className='App'>  
      <Particles 
                params={particlesOptions} className='particles' />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm/>
    {/*
    
       FaceRecognition*/}
    </div>
  );
}

}

export default App;
