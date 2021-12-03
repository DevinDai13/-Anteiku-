import React from "react";
import { Link } from "react-router-dom";
import {
    HOME_URL,
    MENU_URL,
    ABOUT_URL,
    CONTACT_URL,
  } from "../url"

const Dropdown = ({isOpen, toggle}) => {
    return(
        <div className={isOpen ? "grid grid-rows-4 text-center items-center bg-white text-black font-mono":"hidden"} onClick={toggle}>
            <Link className="p-4 hover:bg-gray-100 rounded" to={HOME_URL}>Home</Link>
            <Link className="p-4 hover:bg-gray-100 rounded" to={MENU_URL}>Menu</Link>
            <Link className="p-4 hover:bg-gray-100 rounded" to={ABOUT_URL}>About</Link>
            <Link className="p-4 hover:bg-gray-100 rounded" to={CONTACT_URL}>Contact</Link>
        </div>        
    )
}

export default Dropdown