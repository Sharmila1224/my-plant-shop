import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import About from "./pages/About";
import Shop from "./pages/Shop";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin";

function App() {


  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/Contant" element={<Contact/>}/>
        <Route path="/Signin" element={<Signin/>}/>


      </Routes>
    </BrowserRouter>
    </> 
  )
}

export default App
