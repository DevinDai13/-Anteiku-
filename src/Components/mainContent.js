import React from "react";
import bg from "../Images2/cover.jpg";

const bgstyle = {
    backgroundImage: `url(${ bg })`,
    height: '100%', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

const MainContent = () =>{
    return(
        <div className="flex min-h-screen">
            <div style={bgstyle} className="animate-fade-in-down">
            </div>
        </div>
        
    )
}

export default MainContent