// Banner.jsx
import React from "react";
import "./Banner.css";
//import bannerImage from "./path-to-your-image.jpg"; // Replace with your image path
import { assets } from "../../assets/assets";

const Banner = () => {
  return (
    <div className="banner-info">
    <div className="banner">
      <img src={assets.bannerimg} alt="Banner" className="banner-image" />
      <div className="banner-overlay"></div> {/* Shading overlay */}
      <div className="banner-content">
        <h1 className="banner-heading">Join our memberships and get discount up to 50%</h1>
        <button className="banner-button">Join</button>
      </div>
    </div>
    </div>
  );
};

export default Banner;
