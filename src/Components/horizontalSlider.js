import React from "react";
import "./horizontalSlider.css"

const HorizontalSlider = () =>{
    const [showNav1, setShowNav1] = React.useState(false);
    const [showNav2, setShowNav2] = React.useState(false);
    const [showNav3, setShowNav3] = React.useState(false);

    return(
        <>
            <nav className="mt-8 ml-12 mr-12 mb-12 flex justify-between items-center h-16 text-black relative shadow font-mono bg-gray-300">
                <div href="#0" onClick={() => setShowNav1(!showNav1)} className="text-center w-1/3 p-6 hover:bg-white bg-gray-300 focus:bg-white cursor-pointer">
                    Food
                </div>
                <div href="#0" onClick={() => setShowNav2(!showNav2)} className="text-center w-1/3 p-6 hover:bg-white bg-gray-300 focus:bg-white cursor-pointer">
                    Drinks
                </div>
                <div href="#0" onClick={() => setShowNav3(!showNav3)} className="text-center w-1/3 p-6 hover:bg-white bg-gray-300 focus:bg-white cursor-pointer">
                    Desserts
                </div>
            </nav>

            {showNav1 ? (
                <div className="wrapperFood">
                    <button className="item">Appetizers</button>
                    <button className="item">Mains</button>
                    <button className="item">Desserts</button>
                    <button className="item">Ramen</button>
                    <button className="item">Specials</button>
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

        </>
    )
}

export default HorizontalSlider