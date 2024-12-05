import React from "react";
import "./Contact.css";
import Tasty from "../../components/Tasty/Tasty";

const Contact = () => {
  return (
    <>

   
    <div className="contact-container">
      {/* Map Section */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.547285067959!2d79.4253127!3d25.9905894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ed24e1e7f80e9%3A0x1a9c8b4bde832309!2sOrai%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1699871234567!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Orai Map"
        ></iframe>
      </div>

      {/* Heading Section */}
      <div className="contact-headings">
        <h5>Contact Us</h5>
        <h2>Get in touch for more information</h2>
      </div>

      {/* Form Section */}
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input id="name" type="text" placeholder="Enter your name" className="form-input" required />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input id="email" type="email" placeholder="Enter your email" className="form-input" required />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Enter your message"
            className="form-textarea"
            required
          ></textarea>
        </div>

        <button type="submit" className="form-button">Send</button>
      </form>
    </div>
    <Tasty/>
    </>
  );
};

export default Contact;
