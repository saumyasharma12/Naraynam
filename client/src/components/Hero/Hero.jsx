import React from 'react';
import './Hero.css';
import { assets, menu_list } from '../../assets/assets';
import ExploreMenu from "../ExploreMenu/ExploreMenu"

const Hero = () => {
  return (
    <>

      <section className='our-dishes'>
      <h1 className='our-dishes-heading'>OUR DISHES </h1>
      <p>Our dishes are thoughtfully prepared with the freshest ingredients, blending bold flavors and quality to create meals that are both delicious and satisfying for every palate.</p>
      <div className='explore-menu-list'>
            {menu_list.map((item,index) =>{
                return(
                    <div key={index} className='explore-menu-list-item'>
                        <img className = "our-img"src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
      </section>


      <section className="hero-section">
        <div className="hero-image">
          <img src={assets.heroimg1} alt="Restaurant" className="w-full h-full object-cover" />
        </div>
        <div className="hero-content">
          <h1 className="hero-heading">We invite you to visit our restaurant</h1>
          <p className="hero-description">
            Come enjoy delicious meals, a warm ambiance, and exceptional service. Our menu offers a variety of dishes to satisfy every taste, while the cozy atmosphere makes for a perfect dining experience. Let our friendly staff make your visit memorable!
          </p>
          <button className="hero-button">
            Learn More
          </button>
        </div>
      </section>

      <section className="info-section">
        <div className="info-content">
          <h2 className="info-heading">Unclash your burger craving with our menu</h2>
          <p className="info-paragraph">
          Unclash your burger craving with our menu of fresh, juicy burgers. From classic to unique flavors, every bite is packed with deliciousness. Satisfy your hunger today!.
          </p>
          <button className="hero-button">
            Learn More
          </button>
        </div>
        <div className="info-image">
          <img src={assets.heroimg2} alt="Why Choose Us" className="w-full h-full object-cover" />
        </div>
      </section>
    </>
  );
};

export default Hero;
