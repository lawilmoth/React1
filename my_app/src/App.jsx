import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Page2 from './pages/Page2'
import Gengars from './pages/Gengars'
import PokemonDetail from './pages/PokemonDetail'
import { Routes, Route } from "react-router-dom"
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/> } />  
        <Route path="/page2" element={<Page2/>}  />
        <Route path='/gengars' element={<Gengars/>} />
        <Route path="/pokemon/:id" element={<PokemonDetail/>} />
      </Routes>




    </>
  )
}

export default App
