import './App.css';
import Navigation from './components/navigation/navigation'
import Logo from './components/logo/logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
function App() {
  return (
    <div className='App'>  
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm/>
    {/*
    
       FaceRecognition*/}
    </div>
  );
}

export default App;
