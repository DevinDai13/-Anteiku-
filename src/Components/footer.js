import React from "react";

//https://tailwindcomponents.com/component/responsive-footer

const la_url = "https://www.google.com/search?q=los+angeles&oq=los+an&aqs=chrome.0.0i355i433i512j46i433i512j0i131i433i512j69i57j0i131i433i512j46i199i433i465i512j46i131i433i512j46i433i512l2j46i512.2326j0j1&sourceid=chrome&ie=UTF-8"
const lv_url = "https://www.google.com/search?q=las+vegas&ei=luLQYf33BdiIr7wP37Cs2AQ&gs_ssp=eJzj4tDP1TdILjMuN2D04sxJLFYoS01PLAYAQ2QGiw&oq=las&gs_lcp=Cgdnd3Mtd2l6EAEYADIHCC4QsQMQQzIHCAAQyQMQQzIKCAAQsQMQgwEQQzIECAAQQzIECAAQQzIECAAQQzIHCC4QsQMQQzIECAAQQzIECAAQQzIECAAQQzoHCAAQRxCwAzoHCC4QsAMQQzoHCAAQsAMQQzoICAAQ5AIQsAM6CgguEMgDELADEEM6BAguEEM6CgguELEDEIMBEEM6CgguEMcBENEDEENKBAhBGABKBAhGGAFQ1A1Y6xBgyxVoBXACeACAAXKIAaYCkgEDMi4xmAEAoAEByAETwAEB&sclient=gws-wiz"
const sy_url = "https://www.google.com/search?gs_ssp=eJzj4tDP1TcwqzQ1N2D0YiuuTMlLrQQALUAFRg&q=sydney&oq=sydn&aqs=chrome.1.69i57j46i131i433i512j0i131i433i512j46i131i175i199i433i512j46i433i512j0i131i433i512j46i433i512j46i10i512j0i131i433i512j0i271.3786j0j9&sourceid=chrome&ie=UTF-8"
const sh_url = "https://www.google.com/search?q=shanghai&ei=FuPQYemnBL-10PEPlLKNsAc&gs_ssp=eJzj4tDP1TcwK89KM2D04ijOSMxLz0jMBAA9gAZR&oq=shan&gs_lcp=Cgdnd3Mtd2l6EAEYADIHCC4QsQMQQzIECC4QQzIHCAAQyQMQQzIECC4QQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIICC4QgAQQsQM6BwgAEEcQsAM6BwgAELADEEM6CAgAEOQCELADOgoILhDIAxCwAxBDOhAILhDHARDRAxDIAxCwAxBDOgoILhDHARCvARBDOgoILhDHARDRAxBDOgsIABCABBCxAxCDAUoECEEYAEoECEYYAVCnBVilCmDiDmgDcAJ4AIABb4gBkAOSAQMyLjKYAQCgAQHIARPAAQE&sclient=gws-wiz"

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
                                <span class="my-2"><a href={la_url} class="text-white  text-md hover:text-blue-500">Los Angeles</a></span>
                                <span class="my-2"><a href={lv_url} class="text-white  text-md hover:text-blue-500">Las Vegas</a></span>
                                <span class="my-2"><a href={sy_url} class="text-white  text-md hover:text-blue-500">Sydney</a></span>
                                <span class="my-2"><a href={sh_url} class="text-white  text-md hover:text-blue-500">Shanghai</a></span>
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
                    <div class="mt-16 border-t-2 border-orange-500 flex flex-col items-center">
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