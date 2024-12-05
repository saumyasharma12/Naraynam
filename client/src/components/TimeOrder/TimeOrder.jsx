import React from "react";
import "./TimeOrder.css";
import { assets } from "../../assets/assets";

const TimeOrder = () => {
  return (
    <div className="time-order-container">
      {/* Top Headings */}
      <div className="headings">
        <h5 className="small-heading">How it works</h5>
        <h2 className="large-heading">What we serve</h2>
      </div>

      {/* Paragraph */}
      <p className="description">
        Product quality is our priority, and always guarantees freshness and
        safety until it is in.
      </p>

      {/* Icons Section */}
      <div className="icons-row">
        {/* Icon 1 */}
        <div className="icon-card">
          <img
            src={assets.phoneimg}
            alt="Fresh Products"
            className="icon-image"
          />
          <h3 className="icon-title">Easy To Order</h3>
          <p className="icon-description">
            You only order through the app
          </p>
        </div>

        {/* Icon 2 */}
        <div className="icon-card">
          <img
            src={assets.bikeimg}
            alt="Fast Delivery"
            className="icon-image"
          />
          <h3 className="icon-title">Fastest Delivery</h3>
          <p className="icon-description">
            Quick service to your doorstep.
          </p>
        </div>

        {/* Icon 3 */}
        <div className="icon-card">
          <img
            src={assets.manimg}
            alt="Customer Support"
            className="icon-image"
          />
          <h3 className="icon-title">Best Quality</h3>
          <p className="icon-description">
            The best quality of food for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimeOrder;
