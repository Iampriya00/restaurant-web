import React from "react";
import Button from "../components/Layouts/Button.js";
import Layout from '../components/Layouts/Layout';
const Home = () => {
  return (
    <Layout>
      
    <div className=" min-h-screen flex justify-between items-center lg:px-32 px-5 bg-[url('./img/ban.png')] bg-no-repeat ">
      <div className="w-full space-y-5 lg:w-2/3">
        <h1 className="text-6xl font-semibold text-backgroundColor">
          Elevate Your Inner Foodie with Every Bite.
        </h1>
        <p className=" text-backgroundColor">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis et qui,
          maxime assumenda repellat corrupti officia dolorum delectus labore
          deleniti?
        </p>
        <div className=" lg:pl-44">
          <Button title="Order Now" />
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Home;



