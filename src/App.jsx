import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import './App.css'
import Companies from "./components/Companies/Companies"
import Res from './components/RES/Res'
import Value from "./components/Value/Value"
import Contact from "./components/Contact/Contact"
import Getstart from './components/Getstart/Getstart'
import Footer from "./components/Footer/Footer"


function App() {


  return (
    <div className="App">
      <div>
          <div className="white-gradient"/>
        <Header />
        <Hero />
        <Companies />
      </div>
     
        <Res />
        <Value />
        <Contact/>
        <Getstart />
        <Footer />
       
    </div>
  )
}

export default App
