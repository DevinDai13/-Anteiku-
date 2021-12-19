import React from "react";
import snow from "../Images/snow.jpg";
import cafe from "../Images/Anteiku.jpg";
  
const mystyle = {
    backgroundImage: `url(${snow})`,
    backgroundRepeat  : 'repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    minHeight: '100%',
    backgroundAttachment: 'fixed'
  };
  
  function Contact () {
    return (
        <div style={mystyle}>
            <div className="min-h-screen justify-center items-center animate-fade-in-down">
                <img className="h-80 w-120 justify-center items-center" src={cafe} alt="1" />
            </div>
            <div className="min-h-screen justify-center items-center animate-fade-in-down">
                <p className="text-white font-mono bg-black justify-center">
                    Anteiku (あんていく, Anteiku) was a small neighborhood cafe in the Tokyo Ghoul series.
                    On the surface, the cafe appeared innocent, plain, and pleasant. However, at its heart, it was also an organization of ghouls of the 20th ward. It provided aid for ghouls in need, managed the feeding grounds of those in the 20th ward, and collected food for others by searching for the bodies of humans who committed suicide.
                    Anteiku had two floors and a basement. The ground floor was the cafe itself, where the customers entered and the coffee was brewed. There was a storage space along with a meeting room on the upper floor. The basement was a hidden floor underneath the ground floor where human meat was stored. There was also an entrance to the 24th ward here.
                    In the anime, the cafe's layout was depicted slightly differently by having the entrance, located on the ground floor, connected to the main area with a flight of stairs, leading to the upper floor, where the cafe itself was located. One of the upper floors also contained living quarters for some Anteiku members, including Touka Kirishima and Hinami Fueguchi.
                </p>
            </div>
        </div>
    )
  }

export default Contact