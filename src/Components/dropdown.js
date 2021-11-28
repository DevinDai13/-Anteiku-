import React from "react";

const Dropdown = ({isOpen, toggle}) => {
    return(
        <div className={isOpen ? "grid grid-rows-4 text-center items-center bg-white text-black font-mono":"hidden"} onClick={toggle}>
            <button className="p-4" href='#'>Home</button>
            <button className="p-4" href='#'>Menu</button>
            <button className="p-4" href='#'>About</button>
            <button className="p-4" href='#'>Contact</button>
        </div>        
    )
}

export default Dropdown