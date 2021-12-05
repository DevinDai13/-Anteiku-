import './App.css';
import React, {useState, useEffect} from "react";
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import {Routes, Route} from 'react-router';
import Menu from './Pages/menu.js';
import Contact from './Pages/contact.js';
import About from './Pages/about.js';
import Home from './Pages/home.js';


function App () {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', hideMenu)

    return() =>{
      window.removeEventListener('resize', hideMenu)
    }
  })

  return (
    <>
      <Navbar isOpen={isOpen} toggle={toggle}/>
      {/*<Dropdown isOpen={isOpen} toggle={toggle}/>*/}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )

}

export default App;
