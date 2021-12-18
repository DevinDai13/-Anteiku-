import React from "react";
import bg from "../Images/bg.png";

const MainContent = () =>{
    return(
        <div className="flex min-h-screen">
            <div className="flex justify-center items-center">
                <img className="object-cover" src={bg} alt="1" />
            </div>
        </div>
        
    )
}

export default MainContent