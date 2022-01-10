import React from "react";
import beach from "../Images2/beach.jpg";
import 'w3-css/w3.css';

//https://stackoverflow.com/questions/4997493/set-opacity-of-background-image-without-affecting-child-elements

const background3style = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)),url(${ beach })`,
  backgroundRepeat  : 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '100vh',
  borderRadius:'90px 90px 0px 0px',
};


const menuHome = () => {
  return (
    <>
      <div style={background3style} className="mt-12 animate-fade-in-down flex flex-col justify-center items-center">
        <h1 className="mb-12 ml-24 mr-24 lg:text-7xl md:text-5xl sm:text-3xl text-3xl text-black w3-animate-left">Menu</h1>
        <p className="mb-12 ml-24 mr-24 lg:text-2xl md:text-2xl sm:text-1xl text-black italic w3-animate-right">"Life is a menu. What you order is what is delivered to the table."</p>
      </div>
    </>
  )
}

export default menuHome;
