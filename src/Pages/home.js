import React from "react";
import MainContent from '../Components/mainContent';
import Characters from "../Components/characters";
import snow from "../Images/snow.jpg";

//https://stackoverflow.com/questions/4997493/set-opacity-of-background-image-without-affecting-child-elements
const mystyle = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.12), rgba(255,255,255,0.12)),url(${ snow })`,
  backgroundRepeat  : 'repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  minHeight: '100%',
  backgroundAttachment: 'fixed',
};

function Home () {
  return (
    <div style={mystyle} className="animate-fade-in-down">
      <MainContent/>
      <Characters />
    </div>
  )
}

export default Home;
