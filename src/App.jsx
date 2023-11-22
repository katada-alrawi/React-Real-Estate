import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import './App.css'
import Companies from "./components/Companies/Companies"
import Res from './components/RES/Res'
import Value from "./components/Value/Value"
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
       
    </div>
  )
}

export default App
