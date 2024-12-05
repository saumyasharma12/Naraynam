import React from "react";
import "./FeedbackComponent.css";
import { assets } from "../../assets/assets";

const FeedbackComponent = () => {
  return (
    <div className="feedback-images-container">
      <div className="stat-item">
        <img src={assets.orders} alt="Order Icon" className="stat-image" />
        <h2 className="stat-number">150+</h2>
        <h3 className="stat-title">Orders</h3>
      </div>
      <div className="stat-item">
        <img src={assets.clients} alt="Client Icon" className="stat-image" />
        <h2 className="stat-number">100+</h2>
        <h3 className="stat-title">Clients</h3>
      </div>
      <div className="stat-item">
        <img src={assets.years} alt="Experience Icon" className="stat-image" />
        <h2 className="stat-number">10+</h2>
        <h3 className="stat-title">Years of Experience</h3>
      </div>
      <div className="stat-item">
        <img src={assets.team} alt="Member Icon" className="stat-image" />
        <h2 className="stat-number">50+</h2>
        <h3 className="stat-title">Members</h3>
      </div>
    </div>
  );
};

export default FeedbackComponent;
