import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import './App.scss'

function App() {

  return (
    <div className="AppContainer">
      <Navbar />
      <div className="AppContent">
        <Hero />
        <About />
      </div>
    </div>
  )
}

export default App
