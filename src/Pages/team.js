import React,{useEffect} from "react";
import team4 from "../Images2/team4.jpg";
import AOS from 'aos';
import "aos/dist/aos.css";

const background1style = {
    backgroundImage: `linear-gradient(rgba(255,255,255,0.25), rgba(255,255,255,0.25)),url(${ team4 })`,
    height: '30vh', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius:'0px 0px 90px 90px',
};

const background2style = {
    backgroundColor: 'white',
    height: '70vh', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

//https://dev.to/michaelburrows/how-to-create-an-animated-flip-card-with-css-3d-transforms-4ckj
function Team () {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
        }, []);

  return (
    <>
        <div style={background1style} className="animate-fade-in-down flex flex-col justify-center items-center w3-animate-bottom">
        </div>
        <div className="mt-24 content-center">
            <h1 data-aos={"fade-left"} className="flex flex-col justify-center items-center text-orange-300 text-3xl">
                MEET THE TEAM
            </h1>
        </div>
        <div style={background2style} class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <div className="rounded overflow-auto shadow-lg w3-animate-left">
                <img className="w-full" src={"https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002566/img/basic/a0002566_main.jpg?20201027184855&q=80&rw=750&rh=536"} alt="Mountain" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Member 1</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
            </div>
            </div>
            <div className="rounded overflow-auto shadow-lg w3-animate-bottom">
                <img className="w-full" src="https://luxurylaunches.com/wp-content/uploads/2019/09/Businessman-fashion.jpeg" alt="River" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Member 2</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
            </div>
            </div>
            <div className="rounded overflow-auto shadow-lg w3-animate-right">
                <img className="w-full" src="https://i0.wp.com/www.tycoonstory.com/wp-content/uploads/2016/12/successful-business-tycoon-tycoonstory.png?fit=700%2C400&ssl=1" alt="Forest" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Member 3</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
            </div>
            </div>
        </div>
    </>
  )
}

export default Team;