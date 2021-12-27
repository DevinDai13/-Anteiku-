import React from "react";
import "./horizontalSlider.css"

//https://www.youtube.com/watch?v=2_E5uoiLCLY

const HorizontalSlider = () =>{
    const [showNav1, setShowNav1] = React.useState(false);
    const [showNav2, setShowNav2] = React.useState(false);
    const [showNav3, setShowNav3] = React.useState(false);

    const toggle1 = () => {
        setShowNav1(!showNav1);
        setShowNav2(false);
        setShowNav3(false);
    };

    const toggle2 = () => {
        setShowNav1(false);
        setShowNav2(!showNav2);
        setShowNav3(false);
    };

    const toggle3 = () => {
        setShowNav1(false);
        setShowNav2(false);
        setShowNav3(!showNav3);
    };

   
    return(
        <div>
            <nav className="ml-12 mr-12 flex justify-between items-center h-16 text-black relative font-mono bg-transparent">
                <div href="#0" onClick={toggle1} className="mt-2 rounded text-center w-1/3 p-6 hover:bg-white bg-transparent cursor-pointer font-bold">
                    Food
                </div>
                <div href="#0" onClick={toggle2} className="mt-2 rounded text-center w-1/3 p-6 hover:bg-white bg-transparent cursor-pointer font-bold">
                    Drinks
                </div>
                <div href="#0" onClick={toggle3} className="mt-2 rounded text-center w-1/3 p-6 hover:bg-white bg-transparent cursor-pointer font-bold">
                    Desserts
                </div>
            </nav>

            {showNav1 ? (
                <div className="wrapperFood">
                    <button className="item">Holiday Tasting Menus</button>
                    <button className="item">Features</button>
                    <button className="item">Mains</button>
                </div>
            ) : null}

            {showNav2 ? (
                <div className="wrapperDrinks">
                    <button className="item">New and Seasonal</button>
                    <button className="item">Cocktails</button>
                    <button className="item">Wine</button>
                    <button className="item">Beer</button>
                    <button className="item">Spirit Free</button>
                </div>
            ) : null}
            
            {showNav3 ? (
                <div className="wrapperHappyHour">
                    <button className="item">Cocktails</button>
                    <button className="item">Beer</button>
                    <button className="item">Wine</button>
                    <button className="item">Food</button>
                    <button className="item">Sunday</button>
                </div>
            ) : null}

        </div>
    )
}

export default HorizontalSlider