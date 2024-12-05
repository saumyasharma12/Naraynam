import React from "react";
import "./About.css"; // Import the CSS file
import { assets } from "../../assets/assets";
import Information from "../../components/Information/Information";

const About = () => {
  return (
    <>
    <section className="about-container">
      <div className="about-content">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          Welcome to <span className="narayan">Shree Narayam</span>, where we offer
          the finest selection of delicious and freshly prepared food to satisfy
          every craving. Our mission is to provide high-quality meals using the
          best ingredients, ensuring a delightful dining experience for you and
          your loved ones. Relax and unwind by our beautiful swimming pool while
          enjoying a meal crafted with care. At{" "}
          <span className="narayan">Shree Narayam</span>, your satisfaction is our top
          priority.
        </p>
        <div className="about-image-container">
          <img src={assets.aboutimg} alt="About Us" className="about-image" />
        </div>
        <div className="about-story">
          <h3 className="story-title">Our Story</h3>
          <p className="story-description">
            At <span className="narayan">Shree Narayam</span>, we believe that great food brings people together.
            Founded with a passion for serving high-quality, freshly prepared
            meals, our restaurant has become a place where families and friends
            can create lasting memories. Our journey began with a simple vision:
            to offer a dining experience that combines exceptional flavors, a
            welcoming atmosphere, and a tranquil setting with our beautiful
            swimming pool. Over the years, we’ve remained dedicated to
            delivering delicious meals made from the finest ingredients,
            ensuring that every visit to Narayan is a memorable one.
          </p>
        </div>
      </div>
    </section>
    <Information/>
    </>
  );
};

export default About;
