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
        <>
        <div className="flex justify-center items-center bg-black text-white">
            <div className="m-auto text-white flex flex-wrap justify-center items-center">
                <div className="p-5 w-48">
                    <Link className="text-xs uppercase text-white font-medium" to={HOME_URL}>Home</Link>
                </div>
                <div className="p-5 w-48">
                    <Link className="text-xs uppercase text-white font-medium" to={ABOUT_URL}>About</Link>
                </div>
                <div className="p-5 w-48">
                    <Link className="text-xs uppercase text-white font-medium" to={MENU_URL}>Menu</Link>
                </div>
                <div className="p-5 w-48">
                    <Link className="text-xs uppercase text-white font-medium" to={CONTACT_URL}>Contact</Link>
                </div>
                
            </div> 
        </div>

        <div className="flex justify-center items-center bg-black text-white pb-3">
            <div>
                {'© '}
                {"あんていく "}
                {new Date().getFullYear()}
            </div>
        </div>
        </>
    )
}

export default Footer