import React from "react";
import ramsay from "../Images2/ramsaynobg.png";
import "./about.css"

//https://dev.to/michaelburrows/how-to-create-an-animated-flip-card-with-css-3d-transforms-4ckj
function About () {
  return (
    <>
        <div class="mt-48 mb-28 max-w-md mx-auto mx-auto overflow-hidden md:max-w-2xl bg-white w-full">
            <div class="md:flex">
                <div class="md:shrink-0">
                    <img class="h-110 w-full object-cover lg:h-screen lg:w-full md:h-full md:w-48" src={ramsay} alt="1"></img>
                </div>
                <div class="p-8">
                <div class="uppercase text-lg text-indigo-500 font-semibold w-100">Meet The Team</div>
                </div>
            </div>
        </div>
        <div className="m-32 flex justify-between items-center">
            <div class="flip">
                <div class="flip-content">
                    <div class="flip-front">
                        <img src="https://www.fillmurray.com/150/150" alt="1"/>
                    </div>
                    <div class="flip-back">
                        <strong>BILL MURRAY</strong>
                    </div>
                </div>
            </div>
            <div class="flip">
                <div class="flip-content">
                    <div class="flip-front">
                        <img src="https://www.fillmurray.com/150/150" alt="1"/>
                    </div>
                    <div class="flip-back">
                        <strong>BILL MURRAY</strong>
                    </div>
                </div>
            </div>
            <div class="flip">
                <div class="flip-content">
                    <div class="flip-front">
                        <img src="https://www.fillmurray.com/150/150" alt="1"/>
                    </div>
                    <div class="flip-back">
                        <strong>BILL MURRAY</strong>
                    </div>
                </div>
            </div>


        </div>

    </>
  )
}

export default About;
