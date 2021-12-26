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
                <button href="#" className="ml-12 text-orange-500 italic text-sm underline">See Menu</button>

                <h3 className="text-black font-mono text-1xl ml-12 mt-8">TWO-COURSE MENU FOR ONE   $35</h3>
                <p className="ml-12 mt-2 font-mono text-sm italic text-gray-500 max-w-lg">Your choice of one starter, and one main from our curated menu.</p>
                <button href="#" className="ml-12 text-orange-500 italic text-sm underline">See Menu</button>
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
        </>
        
    )
}

export default MenuContent