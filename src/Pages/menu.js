import React from "react";
import Grid from '../Components/grid';
import snow from "../Images/snow.jpg";
  
const mystyle = {
    backgroundImage: `url(${ snow })`,
    backgroundRepeat  : 'repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    minHeight: '100%',
    backgroundAttachment: 'fixed'
  };
  
  function Menu () {
    return (
      <>
        <div style={mystyle}>
          <Grid/>
        </div>
      </>
      

    )
  }

export default Menu