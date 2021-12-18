import React from "react";
import snow from "../Images/snow.jpg";
import cafe from "../Images/Anteiku.jpg";
  
const mystyle = {
    backgroundImage: `url(${ snow })`,
    backgroundRepeat  : 'repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    minHeight: '100%',
    backgroundAttachment: 'fixed'
  };
  
  function Contact () {
    return (
        <div style={mystyle}>
            <div className="flex justify-center items-center">
                <img className="h-80 w-120 justify-center items-center" src={cafe} alt="1" />
            </div>
        </div>
    )
  }

export default Contact