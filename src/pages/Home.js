import React from "react";
import Button from "../components/Layouts/Button.js";
import HeroImg from '../img/ban.png'

import Layout from '../components/Layouts/Layout';
const Home = () => {
  return (
    <Layout>
      <div className="container min-h-screen mx-auto">
        <div className="grid grid-cols-2 gap-2 pt-10 px-7">
          <div className="w-full gap-4 space-y-9 lg:w-4/5">
            <h1 className="pt-40 pl-10 text-5xl font-semibold text-backgroundColor">
              Elevate Your Inner Foodie with Every Bite.
            </h1>
            <p className="pl-10 text-backgroundColor">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis et qui,
              maxime assumenda repellat corrupti officia dolorum delectus labore
              deleniti?
            </p>
            <div className=" lg:pl-44">
              <Button title="Order Now" />
            </div>
          </div>
          <div align='right' margin='100px' padding-top='50px' padding-right='60px'>
            <img src={HeroImg} alt="img" height='100%' width='100%'/>
          </div>
        </div>


      </div>

    </Layout>
  );
};

export default Home;



