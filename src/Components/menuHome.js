import React from "react";
import beach2 from "../Images2/beach2.jpg"


const bgstyle = {
    backgroundImage: `linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)),url(${ beach2 })`,
    height: '100%', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  };

const MenuHome = () =>{
    return(
        <div style={bgstyle} className="animate-fade-in-down">
            <div className="mt-0 mb-0 ml-12 mr-12 animate-fade-in-down">
                <div className=" mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center p-5" >
                    <div className="flex justify-center text-4xl bg-white-100 cursor-pointer hover:bg-gray-100 transform transition duration-350 hover:scale-105">
                        <img className="" src="https://pbs.twimg.com/media/Do73TSDU4AEgQLr.jpg" alt="1"/>
                    </div>
                    <div className="flex justify-center text-4xl bg-white-100 cursor-pointer hover:bg-gray-100 transform transition duration-350 hover:scale-105">
                        <img className="" src="https://wallpaperaccess.com/full/1322048.jpg" alt="1"/>
                    </div>
                    <div className="flex justify-center text-4xl bg-white-100 cursor-pointer hover:bg-gray-100 transform transition duration-350 hover:scale-105">
                        <img className="" src="https://i.pinimg.com/originals/01/7e/52/017e52ecd2b2bdd776566b0574639055.png" alt="1"/>
                    </div>
                    <div className="flex justify-center text-4xl bg-white-100 cursor-pointer hover:bg-gray-100 transform transition duration-350 hover:scale-105">
                        <img className="" src="https://itadakimasuanime.files.wordpress.com/2013/06/naan-shirokuma-cafe-17-06.png" alt="1"/>
                    </div>
                    <div className="flex justify-center text-4xl bg-white-100 cursor-pointer hover:bg-gray-100 transform transition duration-350 hover:scale-105">
                        <img className="" src="https://cloudedanime.files.wordpress.com/2017/01/dragon-ball-super-73-01-ramen.jpg" alt="1"/>
                    </div>
                    <div className="flex justify-center text-4xl bg-white-100 cursor-pointer hover:bg-gray-100 transform transition duration-350 hover:scale-105">
                        <img className="" src="https://itadakimasuanime.files.wordpress.com/2016/12/0curry-haifuri-02.png" alt="1"/>
                    </div>
                    <div className="flex justify-center text-4xl bg-white-100 cursor-pointer hover:bg-gray-100 transform transition duration-350 hover:scale-105">
                        <img className="" src="https://img.buzzfeed.com/buzzfeed-static/static/2017-11/27/12/asset/buzzfeed-prod-fastlane-03/sub-buzz-18463-1511805244-17.jpg" alt="1" />
                    </div>
                    <div className="flex justify-center text-4xl bg-white-100 cursor-pointer hover:bg-gray-100 transform transition duration-350 hover:scale-105">
                        <img className="" src="https://i.pinimg.com/originals/68/be/a9/68bea902596e5459ac896b169dca5591.png" alt="1"/>
                    </div>
                    <div className="flex justify-center text-4xl bg-white-100 cursor-pointer hover:bg-gray-100 transform transition duration-350 hover:scale-105">
                        <img className="" src="https://64.media.tumblr.com/ecf848e6c779002bd38d83ef620f6406/tumblr_pb8kxraKnu1v656bko1_1280.png" alt="1"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuHome;