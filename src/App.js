import './App.css';
import {ReactComponent as Rocket} from './svg/Rocket.svg'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Userbio from './components/Userbio';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Footnote from './components/Footnote';
import TestSlide from './components/TestSlide';




function App() {
  return (
<div className="bg-white">
<Navbar />
<Hero />
<Features />
<Userbio />
{/* <Slider /> */}
<TestSlide />
<Footer />

<Footnote />


</div>
  );
}

export default App;
