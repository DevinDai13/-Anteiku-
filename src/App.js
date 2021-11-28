import './App.css';
import React, {useState, useEffect} from "react";
import Navbar from './Components/navbar';
import MainContent from './Components/mainContent'
import Footer from './Components/footer'
import Dropdown from './Components/dropdown'
import Grid from './Components/grid'


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
      <MainContent />
      <Grid />
      <Footer />
    </>
  )

}

export default App;
