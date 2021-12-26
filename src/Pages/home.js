import React from "react";
import Characters from "../Components/characters";
import snow from "../Images2/snow.jpg";
import bg from "../Images2/city3.jpg";

//https://stackoverflow.com/questions/4997493/set-opacity-of-background-image-without-affecting-child-elements
const background1style = {
  backgroundImage: `url(${ bg })`,
  height: '100vh', 
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

const background2style = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.12), rgba(255,255,255,0.12)),url(${ snow })`,
  backgroundRepeat  : 'repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  minHeight: '100%',
  backgroundAttachment: 'fixed',
};

function Home () {
  return (
    <>
      <div style={background1style} className="animate-fade-in-down flex flex-col justify-center items-center">
        <h1 className="mb-12 lg:text-7xl md:text-5xl sm:text-3xl text-3xl text-white">Sunset Boulevard</h1>
        <p className="mb-12 lg:text-2xl md:text-2xl sm:text-1xl text-white italic">"The last week in December the rains came."</p>
      </div>
      <div style={background2style} className="animate-fade-in-down">
        <Characters />
      </div>
    </>
  )
}

export default Home;
