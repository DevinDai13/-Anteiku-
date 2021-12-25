import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import {
    HOME_URL,
    MENU_URL,
    ABOUT_URL,
    CONTACT_URL,
  } from "../url"

const Navbar = ({isOpen, toggle}) => {
    return(
        <>
        <nav className="flex justify-between items-center h-16 text-black relative shadow font-mono bg-black">
            <Link to={HOME_URL} className="pl-12 font-bold text-white">
                あんていく
            </Link>
            <div className="px-4 cursor-pointer hover:bg-gray-800 rounded md:hidden" onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className="pr-8 animate-fade-in-down md:block hidden">
                <Link className="text-white p-4 hover:bg-gray-500 rounded focus:ring-2 focus:ring-blue-600" to={HOME_URL}>Home</Link>
                <Link className="text-white p-4 hover:bg-gray-500 rounded focus:ring-2 focus:ring-blue-600" to={MENU_URL}>Menu</Link>
                <Link className="text-white p-4 hover:bg-gray-500 rounded focus:ring-2 focus:ring-blue-600" to={ABOUT_URL}>About</Link>
                <Link className="text-white p-4 hover:bg-gray-500 rounded focus:ring-2 focus:ring-blue-600" to={CONTACT_URL}>Contact</Link>
            </div>
        </nav>

        <div className={isOpen ? "navbar-open animate-fade-in-down" : "hidden"}>
            <nav className="transition ease-in-out duration-700 animate-fade-in-down">
                <ul>
                    <li className="p-4">
                        <Link className="p-6 flex hover:bg-gray-300 rounded-lg" to={HOME_URL}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Home
                        </Link>
                    </li>
                    <li className="p-4">
                        <Link className="p-6 flex hover:bg-gray-300 rounded-lg" to={MENU_URL}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            Menu
                        </Link>
                    </li>
                    <li className="p-4">
                        <Link className="p-6 flex hover:bg-gray-300 rounded-lg" to={ABOUT_URL}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            About
                        </Link>
                    </li>
                    <li className="p-4">
                        <Link className="p-6 flex hover:bg-gray-300 rounded-lg" to={CONTACT_URL}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
        
        </>

    );
};

export default Navbar