
import './App.css';
import AboutUs from './components/About/AboutUs';
import HeroSection from './components/HeroSection/HeroSection';


import AppNavbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
     <AppNavbar/>
    <HeroSection/>
    <AboutUs/>
    </div>
  );
}

export default App;
