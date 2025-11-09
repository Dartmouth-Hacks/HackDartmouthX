import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Hero from './Components/Hero'
import About from './Components/About'
import './App.scss'
import Tracks from './Components/Tracks'
import Footer from './Components/Footer'
import FAQ from './Components/FAQ'
import Sponsors from './Components/Sponsors'
import { useEffect, useRef } from 'react'

function App() {
  const appContentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleResize = () => {
      if (appContentRef.current) {
        const containerWidth = appContentRef.current.clientWidth;
        document.documentElement.style.setProperty('--content-width', `${containerWidth}px`);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="AppContainer">
      <div className="AppContent" ref={appContentRef}>
        <Navbar />
        <Banner />
        <Hero />
        <About />
        <Tracks />
        <FAQ />
        <Sponsors />
        <Footer />
      </div>
    </div>
  )
}

export default App
