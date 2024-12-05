import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import MenuPage from './pages/MenuPage/MenuPage';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

const App = () => {
  const [showLogin, setShowLogin] = useState(false); 
  const [category, setCategory] = useState("All"); // Manages category selection for the MenuPage

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route
            path="/menu"
            element={<MenuPage category={category} setCategory={setCategory} />}
          />
          <Route
            path="/about"
            element={<About category={category} setCategory={setCategory} />}
          />
          <Route
            path="/contact"
            element={<Contact category={category} setCategory={setCategory} />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
