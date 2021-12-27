import React from "react";
import city from "../Images2/city3.jpg";
import beach from "../Images2/beach.jpg";

//https://stackoverflow.com/questions/4997493/set-opacity-of-background-image-without-affecting-child-elements
const background1style = {
  backgroundImage: `url(${ city })`,
  height: '100vh', 
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

/*const background2style = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.12), rgba(255,255,255,0.12)),url(${ snow })`,
  backgroundRepeat  : 'repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  minHeight: '100%',
  backgroundAttachment: 'fixed',
};*/

const background3style = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)),url(${ beach })`,
  backgroundRepeat  : 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '100vh',
};

const linestyle={
  color: 'black',
}

function Home () {
  return (
    <>
      <div style={background1style} className="animate-fade-in-down flex flex-col justify-center items-center">
        <h1 className="mb-12 lg:text-7xl md:text-5xl sm:text-3xl text-3xl text-white">Sunset Boulevard</h1>
        <p className="mb-12 lg:text-2xl md:text-2xl sm:text-1xl text-white italic">"The last week in December the rains came."</p>
      </div>
      <div style={background3style} className="animate-fade-in-down flex flex-col justify-center items-center">
        <h1 className="mt-12 mb-12 lg:text-5xl md:text-3xl sm:text-3xl text-3xl text-black">About Sunset Boulevard</h1>
        <hr className="w-1/3" style={linestyle} />  
        <p className="mb-2 lg:text-2xl md:text-2xl sm:text-1xl text-black italic">"A TEAM OF AWARD</p>
        <p className="mb-2 lg:text-2xl md:text-2xl sm:text-1xl text-black italic">WINNING CHEFS.</p>
        <p className="mb-2 lg:text-2xl md:text-2xl sm:text-1xl text-black italic">GLOBALLY-INSPIRED</p>
        <p className="mb-2 lg:text-2xl md:text-2xl sm:text-1xl text-black italic">DISHES.</p>
        <p className="mb-2 lg:text-2xl md:text-2xl sm:text-1xl text-black italic">UNPARALLELED</p>
        <p className="mb-2 lg:text-2xl md:text-2xl sm:text-1xl text-black italic">HOSPITALITY."</p>
        <p className="ml-32 mr-32 mt-4 mb-12 lg:text-2xl md:text-2xl sm:text-1xl text-black italic">"Instead of just one chef, we have a whole team of celebrated Executive Chefs bringing you an experience you can’t get anywhere else. We believe in handcrafted, locally and globally inspired menu offerings."</p>
      </div>
    </>
  )
}

export default Home;
