import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import {
    HOME_URL,
    MENU_URL,
    TEAM_URL,
    CONTACT_URL,
  } from "../url"
  import logo from "../Images2/logonobg.png"


const Navbar = ({isOpen, toggle}) => {
    return(
        <>
            <nav className="flex justify-between items-center h-16 text-black relative shadow bg-black w3-animate-right">
                <Link to={HOME_URL} className="flex font-bold text-white">
                    <div className="pl-12 pt-12 h-32 w-32">
                        <img src={logo} alt="Logo" />
                    </div>
                </Link>
                <div className="px-4 mr-6 cursor-pointer hover:bg-gray-800 rounded md:hidden" onClick={toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <div className="pr-8 animate-fade-in-down md:block hidden">
                    <Link className="text-orange-500 p-4 hover:bg-gray-500 rounded focus:bg-gray-500" to={HOME_URL}>Home</Link>
                    <Link className="text-orange-500 p-4 hover:bg-gray-500 rounded focus:bg-gray-500" to={MENU_URL}>Menu</Link>
                    <Link className="text-orange-500 p-4 hover:bg-gray-500 rounded focus:bg-gray-500" to={TEAM_URL}>Team</Link>
                    <Link className="text-orange-500 p-4 hover:bg-gray-500 rounded focus:bg-gray-500" to={CONTACT_URL}>Contact</Link>
                </div>
            </nav>

            <div className={isOpen ? "navbar-open animate-fade-in-down" : "hidden"}>
                <nav className="transition ease-in-out duration-700 animate-fade-in-down">
                    <ul>
                        <li className="p-4">
                            <Link className="p-6 flex hover:bg-gray-300 rounded-lg w3-animate-left" to={HOME_URL} onClick={toggle}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="black">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span className="text-black font-bold">Home</span>
                            </Link>
                        </li>
                        <li className="p-4">
                            <Link className="p-6 flex hover:bg-gray-300 rounded-lg w3-animate-left" to={MENU_URL} onClick={toggle}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="black">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                                <span className="text-black font-bold">Menu</span>
                            </Link>
                        </li>
                        <li className="p-4">
                            <Link className="p-6 flex hover:bg-gray-300 rounded-lg w3-animate-left" to={TEAM_URL} onClick={toggle}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="black">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="text-black font-bold">Team</span>
                            </Link>
                        </li>
                        <li className="p-4">
                            <Link className="p-6 flex hover:bg-gray-300 rounded-lg w3-animate-left" to={CONTACT_URL} onClick={toggle}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="black">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-black font-bold">Contact</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        
        </>

    );
};

export default Navbar