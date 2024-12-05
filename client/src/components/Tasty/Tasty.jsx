import React from 'react';
import './Tasty.css';
import { assets } from '../../assets/assets';

const Tasty = () => {
  return (
    <div className="tasty-container">
      <div className="tasty-header">
        <h4 className="small-heading">Tasty and healthy</h4>
        <h2 className="large-heading">Find what's best for you</h2>
        <p className="description">
          Explore a variety of meals crafted to suit your taste and lifestyle. Discover wholesome flavors, and indulge in dishes prepared with care and fresh ingredients.
        </p>
      </div>
      <div className="card-container">
        <div className="card">
          <img src={assets.delicious} alt="Delicious Food" className="card-image" />
          <h3 className="card-title">Delicious Meals</h3>
          <p className="card-text">Savor our chef-crafted meals made with fresh, wholesome ingredients.</p>
          <a href="#" className="learn-more">Learn more</a>
        </div>
        <div className="card">
          <img src={assets.dietfood} alt="Healthy Snacks" className="card-image" />
          <h3 className="card-title">Healthy Snacks</h3>
          <p className="card-text">Snack smart with our delicious and healthy options.</p>
          <a href="#" className="learn-more">Learn more</a>
        </div>
        <div className="card">
          <img src={assets.bowl} alt="Refreshing Drinks" className="card-image" />
          <h3 className="card-title">Quinoa Bowl</h3>
          <p className="card-text">Enjoy beverages that refresh your mind and body.</p>
          <a href="#" className="learn-more">Learn more</a>
        </div>
      </div>
    </div>
  );
};

export default Tasty;
