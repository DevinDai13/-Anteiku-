import React from "react";
import { Link } from "react-router-dom";
import {
    HOME_URL,
    MENU_URL,
    ABOUT_URL,
    CONTACT_URL,
  } from "../url"

const Navbar = ({toggle}) => {
    return(
        <nav className="flex justify-between items-center h-16 text-black relative shadow font-mono">
            <Link to={HOME_URL} className="pl-8 font-bold">
                あんていく
            </Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link className="p-4 hover:bg-gray-100 rounded" to={HOME_URL}>Home</Link>
                <Link className="p-4 hover:bg-gray-100 rounded" to={MENU_URL}>Menu</Link>
                <Link className="p-4 hover:bg-gray-100 rounded" to={ABOUT_URL}>About</Link>
                <Link className="p-4 hover:bg-gray-100 rounded" to={CONTACT_URL}>Contact</Link>
            </div>    
        </nav>

    );
};

export default Navbar