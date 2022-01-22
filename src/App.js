import './App.css';
import React, {useState, useEffect} from "react";
import {Routes, Route} from 'react-router';
import Menu from './Pages/menu.js';
import Contact from './Pages/contact.js';
import Team from './Pages/team.js';
import NavbarV2 from './Components/navbarV2';
import HomeV2 from './Pages/homeV2.js';
import FooterV2 from './Components/footerV2';
import ScrollToTop from './Components/scrollToTop';

//https://www.youtube.com/watch?v=eOV2tx1aJZA
//https://github.com/koolkishan/food-yummy-reactjs-food-website/tree/master/src

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
      <ScrollToTop />
      <NavbarV2 isOpen={isOpen} toggle={toggle}/>
      <Routes>
        <Route exact path="/" element={<HomeV2 />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/team" element={<Team />} />
      </Routes>
      <FooterV2 />
    </>
  )

}

export default App;
