import React from "react";

//https://tailwindcomponents.com/component/responsive-footer

const Footer = () =>{
    return(
        <>
            <footer class="footer bg-black relative pt-1 border-b-2 border-blue-700">
                <div class="container mx-auto px-6">
                    <div class="sm:flex sm:mt-8">
                        <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                            <div class="flex flex-col">
                                <span class="font-bold text-orange-500 uppercase mb-2">ABOUT US</span>
                                <span class="my-2"><a href="#0" class="text-white  text-md hover:text-blue-500">Store Locator</a></span>
                                <span class="my-2"><a href="#0" class="text-white  text-md hover:text-blue-500">Gift Cards</a></span>
                                <span class="my-2"><a href="#0" class="text-white  text-md hover:text-blue-500">Careers</a></span>
                            </div>
                            <div class="flex flex-col">
                                <span class="font-bold text-orange-500 uppercase mt-4 md:mt-0 mb-2">VISIT US</span>
                                <span class="my-2"><a href="#0" class="text-white  text-md hover:text-blue-500">Los Angeles</a></span>
                                <span class="my-2"><a href="#0" class="text-white  text-md hover:text-blue-500">Las Vegas</a></span>
                                <span class="my-2"><a href="#0" class="text-white  text-md hover:text-blue-500">Sydney</a></span>
                                <span class="my-2"><a href="#0" class="text-white  text-md hover:text-blue-500">Shanghai</a></span>
                            </div>
                            <div class="flex flex-col">
                                <span class="font-bold text-orange-500 uppercase mt-4 md:mt-0 mb-2">LEGAL</span>
                                <span class="my-2"><a href="#0" class="text-white text-md hover:text-blue-500">Privacy Policy</a></span>
                                <span class="my-2"><a href="#0" class="text-white  text-md hover:text-blue-500">Trademark</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container mx-auto px-6">
                    <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                        <div class="sm:w-2/3 text-center py-6">
                            <p class="text-sm text-white font-bold mb-2">
                                {'© '}
                                {"Sunset Boulevard "}
                                {new Date().getFullYear()}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer