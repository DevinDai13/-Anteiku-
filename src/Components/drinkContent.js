import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../Components/menuContent.css"

const DrinkContent = () =>{

    const [showModal1, setShowModal1] = React.useState(false);
    const [showModal2, setShowModal2] = React.useState(false);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


    return(
        <>
            <div>
                <h1 className="text-orange-500 font-mono lg:text-3xl md:text-3xl sm:text-3xl h-16 ml-12 mt-8">New and Seasonal</h1>
            </div>
            <div className="mb-12 w3-animate-top">
                <Slider {...settings}>
                    <div>
                        <img id="slides" src={"https://www.tasteofhome.com/wp-content/uploads/2019/04/Yellow-Hammer.jpg?resize=700,700"} alt="1"></img>
                    </div>
                    <div>
                        <img id="slides" src={"https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/alcohol-lime-vodka-gin-soda-1296x728-header.jpg?w=1155&h=1528"} alt="1"></img>
                    </div>
                    <div>
                        <img id="slides" src={"https://www.brit.co/media-library/this-citrus-champagne-punch-on-a-red-checkered-plate-with-a-slice-of-grapefruit-highlights-our-list-of-top-summer-cocktails.jpg?id=20911519&width=600&coordinates=0%2C0%2C0%2C0&height=600"} alt="1"></img>
                    </div>
                </Slider>
            </div>
            <div className="mb-20 w3-animate-left">
                <h3 className="text-black font-mono text-1xl ml-12 mr-12">THREE-COURSE MENU FOR TWO   $68</h3>
                <p className="ml-12 mt-2 mr-12 font-mono text-sm italic text-gray-500 max-w-lg">Your choice of one starter, two mains, and one dessert from our curated menu.</p>
                <button href="#" className="ml-12 text-orange-500 italic text-sm underline mr-12" onClick={() => setShowModal1(true)}>See Menu</button>

                <h3 className="text-black font-mono text-1xl ml-12 mt-8 mr-12">TWO-COURSE MENU FOR ONE   $35</h3>
                <p className="ml-12 mt-2 mr-12 font-mono text-sm italic text-gray-500 max-w-lg">Your choice of one starter, and one main from our curated menu.</p>
                <button href="#" className="ml-12 mr-12 text-orange-500 italic text-sm underline" onClick={() => setShowModal2(true)}>See Menu</button>
            </div>


            <div>
                <h1 className="text-orange-500 font-mono lg:text-3xl md:text-3xl sm:text-3xl h-16 ml-12 mt-8">Cocktails</h1>
            </div>
            <div className="mb-12 w3-animate-top">
                <Slider {...settings}>
                    <div>
                        <img id="slides" src={"https://www.tasteofhome.com/wp-content/uploads/2019/04/Yellow-Hammer.jpg?resize=700,700"} alt="1"></img>
                    </div>
                    <div>
                        <img id="slides" src={"https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/alcohol-lime-vodka-gin-soda-1296x728-header.jpg?w=1155&h=1528"} alt="1"></img>
                    </div>
                    <div>
                        <img id="slides" src={"https://www.brit.co/media-library/this-citrus-champagne-punch-on-a-red-checkered-plate-with-a-slice-of-grapefruit-highlights-our-list-of-top-summer-cocktails.jpg?id=20911519&width=600&coordinates=0%2C0%2C0%2C0&height=600"} alt="1"></img>
                    </div>
                </Slider>
            </div>
            <div className="mb-20 w3-animate-left">
                <h3 className="text-black font-mono text-1xl ml-12 mr-12">THE MED BOWL  $24¼</h3>
                <p className="ml-12 mt-2 font-mono text-sm italic text-gray-500 max-w-lg mr-12">turmeric rice, beetroot hummus, kale, cucumber, red onion, tomatoes, macedonian feta, kalamata olives, yogurt, pickled red cabbage</p>

                <h3 className="text-black font-mono text-1xl ml-12 mt-8 mr-12">BANDARA SALAD  $22</h3>
                <p className="ml-12 mt-2 font-mono text-sm italic text-gray-500 max-w-lg mr-12">fresh greens, cajun chicken breast, corn, tomatoes, chopped dates, feta, chow mein noodles, honey-lime vinaigrette</p>
            
                <h3 className="text-black font-mono text-1xl ml-12 mt-8 mr-12">PEPPERCORN STEAK  $46</h3>
                <p className="ml-12 mt-2 font-mono text-sm italic text-gray-500 max-w-lg mr-12">12oz certified angus beef® striploin, chef rob feenie’s pernod peppercorn demi-glace, buttered mashed potatoes, roasted asparagus</p>
            </div>

            <div>
                <h1 className="text-orange-500 font-mono lg:text-3xl md:text-3xl sm:text-3xl h-16 ml-12 mt-8">Wine</h1>
            </div>
            <div className="mb-12 w3-animate-top">
                <Slider {...settings}>
                    <div>
                        <img id="slides" src={"https://www.tasteofhome.com/wp-content/uploads/2019/04/Yellow-Hammer.jpg?resize=700,700"} alt="1"></img>
                    </div>
                    <div>
                        <img id="slides" src={"https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/alcohol-lime-vodka-gin-soda-1296x728-header.jpg?w=1155&h=1528"} alt="1"></img>
                    </div>
                    <div>
                        <img id="slides" src={"https://www.brit.co/media-library/this-citrus-champagne-punch-on-a-red-checkered-plate-with-a-slice-of-grapefruit-highlights-our-list-of-top-summer-cocktails.jpg?id=20911519&width=600&coordinates=0%2C0%2C0%2C0&height=600"} alt="1"></img>
                    </div>
                </Slider>
            </div>
            <div className="mb-0 w3-animate-left">
                <h3 className="text-black font-mono text-1xl ml-12 mr-12">GRILLED DIJON SALMON  $29¼</h3>
                <p className="ml-12 mt-2 font-mono text-sm italic text-gray-500 max-w-lg mr-12">ocean wise™ lois lake steelhead, buttered mashed potatoes, roasted asparagus, soy-dijon butter sauce, cilantro</p>

                <h3 className="text-black font-mono text-1xl ml-12 mt-8 mr-12">BUTTERNUT SQUASH RAVIOLI WITH PRAWNS  $29¼</h3>
                <p className="ml-12 mt-2 font-mono text-sm italic text-gray-500 max-w-lg mr-12">chef rob feenie’s signature butternut squash and mascarpone ravioli, truffle butter, sautéed jumbo prawns, pine nuts, crispy sage</p>
            
                <h3 className="text-black font-mono text-1xl ml-12 mt-8 mr-12">PRAWN SPAGHETTINI  $24½</h3>
                <p className="ml-12 mt-2 font-mono text-sm italic text-gray-500 max-w-lg mr-12">slow-roasted tomato sauce, chilies, fresh herbs, crostini</p>
            </div>


            {showModal1 ? (
            <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-sans italics">
                        THREE-COURSE MENU FOR TWO
                    </h3>
                    <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal1(false)}
                    >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                        </span>
                    </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed font-mono">
                        Food texture is defined as those properties of a food that are sensed by touch in the mouth and with the hands
                    </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal1(false)}
                    >
                        Close
                    </button>
                    </div>
                </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}

        {showModal2 ? (
                <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-sans italics">
                            TWO-COURSE MENU FOR ONE
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal2(false)}
                        >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                            </span>
                        </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                        <p className="my-4 text-blueGray-500 text-lg leading-relaxed font-mono">
                            Food texture is defined as those properties of a food that are sensed by touch in the mouth and with the hands
                        </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal2(false)}
                        >
                            Close
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
        
    )
}

export default DrinkContent