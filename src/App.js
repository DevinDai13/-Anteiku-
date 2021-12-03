import './App.css';
import React, {useState, useEffect} from "react";
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import MainContent from './Components/mainContent'
import Dropdown from './Components/dropdown';
import Grid from './Components/grid';
import {Routes, Route} from 'react-router';
import Menu from './Pages/menu.js';
import Contact from './Pages/contact.js';
import About from './Pages/about.js';


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
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Routes>
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <MainContent/>
      <Grid />
      <Footer />
    </>
  )

}

export default App;
