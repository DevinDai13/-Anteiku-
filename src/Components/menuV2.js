import React, { useState, useEffect } from "react";
import SubMenu from "./subMenu";
import Categories from "./category";
import items from "./data";
import "./menuV2.css";
import AOS from 'aos';
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const MenuV2 = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories] = useState(allCategories);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    }, []);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <section className="menu section">
        <div className="title">
          <h2 data-aos={"fade-up"} className="text-2xl">MENU</h2>
          <div data-aos={"fade-down"} className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <div className="mb-32 w3-animate-top">
                <Slider {...settings}>
                    <div>
                        <img className="rounded-2xl h-100 w-100" id="slides" src={"https://www.tasteofhome.com/wp-content/uploads/2019/04/Yellow-Hammer.jpg?resize=700,700"} alt="1"></img>
                    </div>
                    <div>
                        <img className="rounded-2xl h-100 w-100" id="slides" src={"https://www.blossmangas.com/wp-content/uploads/2020/05/Lemonade-1-1.jpg"} alt="1"></img>
                    </div>
                    <div>
                        <img className="rounded-2xl h-100 w-100" id="slides" src={"https://www.brit.co/media-library/this-citrus-champagne-punch-on-a-red-checkered-plate-with-a-slice-of-grapefruit-highlights-our-list-of-top-summer-cocktails.jpg?id=20911519&width=600&coordinates=0%2C0%2C0%2C0&height=600"} alt="1"></img>
                    </div>
                </Slider>
        </div>
        <SubMenu items={menuItems}/>
      </section>
    </div>
  );
};

export default MenuV2;