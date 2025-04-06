import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import './App.scss'
import Tracks from './Components/Tracks'
import Footer from './Components/Footer'
import FAQ from './Components/FAQ'
import Sponsors from './Components/Sponsors'

function App() {

  return (
    <div className="AppContainer">
      <Navbar />
      <div className="AppContent">
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
