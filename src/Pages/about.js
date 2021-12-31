import React from "react";
import ramsay from "../Images2/ramsaynobg.png";

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

        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <div class="rounded overflow-hidden shadow-lg">
                <img class="w-full" src={"/mountain.jpg"} alt="Mountain" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Mountain</div>
                <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
            </div>
            <div class="rounded overflow-hidden shadow-lg">
                <img class="w-full" src="/river.jpg" alt="River" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">River</div>
                <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
            </div>
            </div>
            <div class="rounded overflow-hidden shadow-lg">
                <img class="w-full" src="/forest.jpg" alt="Forest" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Forest</div>
                <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
            </div>
            </div>
        </div>
    </>
  )
}

export default About;
