import React, { useState } from 'react'
import './Home.css';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import TimeOrder from '../../components/TimeOrder/TimeOrder';
import Banner from '../../components/Banner/Banner';
import Tasty from '../../components/Tasty/Tasty';
import Offers from '../../components/Offers/Offers';
import FeedbackComponent from '../../components/FeedbackComponent/FeedbackComponent';


const Home = () => {

    //const [category,setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <Hero/>
        <TimeOrder/>
        <Tasty/>
        <Banner/>
        <Offers/>
        <FeedbackComponent/>
    </div>
  )
}

export default Home