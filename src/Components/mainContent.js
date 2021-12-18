import React from "react";
import bg from "../Images/bg.png";

const MainContent = () =>{
    return(
        <div className="flex min-h-screen">
            <div className="flex justify-center items-center">
                <img className="w-full object-cover md:h-full sm:h-full" src={bg} alt="1" />
            </div>
        </div>
        
    )
}

export default MainContent