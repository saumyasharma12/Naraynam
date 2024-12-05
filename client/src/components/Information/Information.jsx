import React from 'react';
import './Information.css'
import { assets } from '../../assets/assets';
const Information = () => {
  return (
    <div className="information-container">
      <div className="info-item">
        <img src={assets.food} alt="Delicious Food" className="icon" />
        <h3>Tasty and healthy</h3>
        <p>We serve flavorful meals made with fresh ingredients, offering a perfect balance of taste and health.</p>
      </div>
      <div className="info-item">
        <img src={assets.swimming} alt="Swimming Pool" className="icon" />
        <h3>Swimming Pool</h3>
        <p>our peaceful swimming pool provides the perfect setting to relax, refresh, and rejuvenate.</p>
      </div>
      <div className="info-item">
        <img src={assets.life} alt="24/7 Service" className="icon" />
        <h3>Healthier lifestyle</h3>
        <p>we offer meals made with fresh, nutritious ingredients, supporting your journey to a healthier lifestyle.</p>
      </div>
    </div>
  );
};

export default Information;
