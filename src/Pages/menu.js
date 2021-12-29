import React from "react";
import HorizontalSlider from "../Components/horizontalSlider";
import menuBG from "../Images2/menuBG.jpg"
import MenuContent from "../Components/menuContent";

const bgstyle = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)),url(${ menuBG })`,
  height: '100%', 
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
};

function Menu () {
  return (
      <div style={bgstyle} className="animate-fade-in-down">
        <HorizontalSlider/>
        <MenuContent />
      </div>
  )
}

export default Menu