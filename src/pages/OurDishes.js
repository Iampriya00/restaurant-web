import React from "react";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";
import DishesCard from '../components/DishesCard'
import Layout from '../components/Layouts/Layout'

const OurDishes = () => {
  return (
    <Layout>
      <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5 pb-24">
        <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
          Our Dishes
        </h1>

        <div className=" flex flex-wrap gap-8 justify-center">
          <DishesCard img={img1} title="Tasty Dish" price="$10.99" />
          <DishesCard img={img2} title="Tasty Dish" price="$12.99" />
          <DishesCard img={img3} title="Tasty Dish" price="$10.99" />
          <DishesCard img={img4} title="Tasty Dish" price="$11.99" />
          <DishesCard img={img5} title="Tasty Dish" price="$10.99" />
          <DishesCard img={img6} title="Tasty Dish" price="$12.99" />
        </div>
      </div>
      </Layout>
  );
};

export default OurDishes;
