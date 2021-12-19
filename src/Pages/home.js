import React from "react";
import MainContent from '../Components/mainContent';
import Characters from "../Components/characters";
import snow from "../Images/snow.jpg";

const mystyle = {
  backgroundImage: `url(${ snow })`,
  backgroundRepeat  : 'repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  minHeight: '100%',
  backgroundAttachment: 'fixed'
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
