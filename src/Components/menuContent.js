import React from "react";
import "./menuContent.css"

const food1 = {
    backgroundImage: `url("https://static.toiimg.com/thumb/82085026.cms?resizemode=4&width=1200")`,
    height: '100%', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

const food2 = {
    backgroundImage: `url("https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F181114130138-korean-food-2620014201204004k-jeonju-bibimbap.jpg")`,
    height: '100%', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

const food3 = {
    backgroundImage: `url("https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/Kensfoods_breakoutflavors_690784532.jpg")`,
    height: '100%', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

const MenuContent = () =>{

    const [showModal1, setShowModal1] = React.useState(false);
    const [showModal2, setShowModal2] = React.useState(false);

    return(
        <>
            <div>
                <h1 className="text-orange-500 font-mono lg:text-3xl md:text-3xl sm:text-3xl h-16 ml-12 mt-8">Holiday Tasting Menus</h1>
            </div>
            <div className="flex h-80">
                <div className="wrapperImage">
                    <div className="Img" style={food1}></div>
                    <div className="Img" style={food2}></div>
                    <div className="Img" style={food3}></div>
                </div>
            </div>
            <div className="mb-20">
                <h3 className="text-black font-mono text-1xl ml-12">THREE-COURSE MENU FOR TWO   $68</h3>
                <p className="ml-12 mt-2 font-mono text-sm italic text-gray-500 max-w-lg">Your choice of one starter, two mains, and one dessert from our curated menu.</p>
                <button href="#" className="ml-12 text-orange-500 italic text-sm underline" onClick={() => setShowModal1(true)}>See Menu</button>

                <h3 className="text-black font-mono text-1xl ml-12 mt-8">TWO-COURSE MENU FOR ONE   $35</h3>
                <p className="ml-12 mt-2 font-mono text-sm italic text-gray-500 max-w-lg">Your choice of one starter, and one main from our curated menu.</p>
                <button href="#" className="ml-12 text-orange-500 italic text-sm underline" onClick={() => setShowModal2(true)}>See Menu</button>
            </div>


            <div>
                <h1 className="text-orange-500 font-mono lg:text-3xl md:text-3xl sm:text-3xl h-16 ml-12 mt-8">Features</h1>
            </div>
            <div className="flex h-80">
                <div className="wrapperImage">
                    <div className="Img" style={food3}></div>
                    <div className="Img" style={food2}></div>
                    <div className="Img" style={food1}></div>
                </div>
            </div>
            <div className="mb-20">
                <h3 className="text-black font-mono text-1xl ml-12">THE MED BOWL  $24¼</h3>
                <p className="ml-12 mt-2 font-mono text-sm italic text-gray-500 max-w-lg">turmeric rice, beetroot hummus, kale, cucumber, red onion, tomatoes, macedonian feta, kalamata olives, yogurt, pickled red cabbage</p>

                <h3 className="text-black font-mono text-1xl ml-12 mt-8">BANDARA SALAD  $22</h3>
                <p className="ml-12 mt-2 font-mono text-sm italic text-gray-500 max-w-lg">fresh greens, cajun chicken breast, corn, tomatoes, chopped dates, feta, chow mein noodles, honey-lime vinaigrette</p>
            
                <h3 className="text-black font-mono text-1xl ml-12 mt-8">PEPPERCORN STEAK  $46</h3>
                <p className="ml-12 mt-2 font-mono text-sm italic text-gray-500 max-w-lg">12oz certified angus beef® striploin, chef rob feenie’s pernod peppercorn demi-glace, buttered mashed potatoes, roasted asparagus</p>
            </div>

            <div>
                <h1 className="text-orange-500 font-mono lg:text-3xl md:text-3xl sm:text-3xl h-16 ml-12 mt-8">Mains</h1>
            </div>
            <div className="flex h-80">
                <div className="wrapperImage">
                    <div className="Img" style={food2}></div>
                    <div className="Img" style={food3}></div>
                    <div className="Img" style={food1}></div>
                </div>
            </div>
            <div className="mb-0">
                <h3 className="text-black font-mono text-1xl ml-12">GRILLED DIJON SALMON  $29¼</h3>
                <p className="ml-12 mt-2 font-mono text-sm italic text-gray-500 max-w-lg">ocean wise™ lois lake steelhead, buttered mashed potatoes, roasted asparagus, soy-dijon butter sauce, cilantro</p>

                <h3 className="text-black font-mono text-1xl ml-12 mt-8">BUTTERNUT SQUASH RAVIOLI WITH PRAWNS  $29¼</h3>
                <p className="ml-12 mt-2 font-mono text-sm italic text-gray-500 max-w-lg">chef rob feenie’s signature butternut squash and mascarpone ravioli, truffle butter, sautéed jumbo prawns, pine nuts, crispy sage</p>
            
                <h3 className="text-black font-mono text-1xl ml-12 mt-8">PRAWN SPAGHETTINI  $24½</h3>
                <p className="ml-12 mt-2 font-mono text-sm italic text-gray-500 max-w-lg">slow-roasted tomato sauce, chilies, fresh herbs, crostini</p>
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

export default MenuContent