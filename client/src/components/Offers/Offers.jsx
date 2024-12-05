import React from "react";
import "./Offers.css";

const Offers = () => {
  return (
    <div className="offers-container">
      <small className="small-heading">All you need</small>
      <h1 className="main-heading">
        Perfect catering options<br />for your health
      </h1>
      <p className="description">
      Customizable menus tailored for every occasion, ensuring a perfect fit for your unique celebration. Enjoy affordable, transparent pricing with no hidden surprises.
      </p>

      <div className="cards-container">
        <div className="card small-card">
          <h2>Starter</h2>
          <p className="price">$34,99</p>
          <ul>
            <li>✅ Customizable menus</li>
            <li>✅ Bulk ordering discounts</li>
            <li>✅ On-site or off-site</li>
            <li>✅ Transparent pricing</li>
          </ul>
          <button className="start-button">Start Now</button>
        </div>
        <div className="card big-card">
          <h2>Pro</h2>
          <p className="price">$65,99</p>
          <ul>
            <li>✅ Customizable menus</li>
            <li>✅ Bulk ordering discounts</li>
            <li>✅ On-site or off-site</li>
            <li>✅ Transparent pricing</li>
            <li>✅ Include service staff</li>
          </ul>
          <button className="start-button">Start Now</button>
        </div>
        <div className="card small-card">
          <h2>Premium</h2>
          <p className="price">$99,99</p>
          <ul>
            <li>✅ Customizable menus</li>
            <li>✅ Bulk ordering discounts</li>
            <li>✅ On-site or off-site</li>
            <li>✅ Transparent pricing</li>
          </ul>
          <button className="start-button">Start Now</button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
