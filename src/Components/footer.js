import React from "react";
import { Link } from "react-router-dom";
import {
    HOME_URL,
    MENU_URL,
    ABOUT_URL,
    CONTACT_URL,
  } from "../url"

const Footer = () =>{
    return(
        <div className="flex justify-center items-center bg-black text-white">
            <div className="m-auto text-white flex flex-wrap justify-center items-center">
                <div className="p-5 w-48 ">
                    <Link className="text-xs uppercase text-white font-medium" to={HOME_URL}>Home</Link>
                </div>
                <div className="p-5 w-48 ">
                    <Link className="text-xs uppercase text-white font-medium" to={ABOUT_URL}>About</Link>
                </div>
                <div className="p-5 w-48 ">
                    <Link className="text-xs uppercase text-white font-medium" to={MENU_URL}>Menu</Link>
                </div>
                <div className="p-5 w-48 ">
                    <Link className="text-xs uppercase text-white font-medium" to={CONTACT_URL}>Contact</Link>
                </div>
                <div className="flex pb-5 px-3 m-auto pt-5 text-white text-sm flex-col md:flex-row max-w-6xl">
                    <div>
                        {'© '}
                        {"あんていく "}
                        {new Date().getFullYear()}
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Footer