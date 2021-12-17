import React from "react";

const Characters = () =>{
    return(
        <>
            <div className="flex justify-center items-center mt-20 ml-20 mr-20 bg-gray-700 rounded-tl-Large">
                <img className="sm:w-30 h-30 md:w-40 h-40 lg:w-64 h-64 rounded-full flex" src="https://numeralpaint.com/wp-content/uploads/2020/07/kaneki-tokyo-ghoul-adult-paint-by-numbers.jpg" alt="1" />
                <p className="text-white pl-10 flex">Kaneki now lives under the new identity of Haise Sasaki and has been taken into the care of the CCG</p>
            </div>
            <div className="flex justify-center items-center ml-20 mr-20 bg-gray-700">
                <p className="text-white pr-10 flex">Touka Kirishima is the deuteragonist and a ghoul and waitress at Anteiku and one of the main characters of the Tokyo Ghoul franchise</p>
                <img className="sm:w-30 h-30 md:w-40 h-40 lg:w-64 h-64 rounded-full flex" src="https://images6.fanpop.com/image/photos/39400000/Touka-kirishima-touka-kirishima-39481726-1280-720.png" alt="1" />
            </div>
            <div className="flex justify-center items-center ml-20 mr-20 ml-20 mb-20 bg-gray-700 rounded-br-Large">
                <img className="sm:w-30 h-30 md:w-40 h-40 lg:w-64 h-64 rounded-full flex" src="https://static3.cbrimages.com/wordpress/wp-content/uploads/2020/06/Hide-in-Tokyo-Ghoul-re.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5" alt="1" />
                <p className="text-white pl-10 flex">Nagachika Hideyoshi is a normal human and the best friend of Ken Kaneki</p>
            </div>
        </>
    )
}

export default Characters