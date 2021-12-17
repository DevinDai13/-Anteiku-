import React from "react";
import MainContent from '../Components/mainContent';
import Grid from '../Components/grid';
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
    <div style={mystyle}>
      <MainContent/>
      <Characters />
      <Grid />
    </div>
  )
}

export default Home;
