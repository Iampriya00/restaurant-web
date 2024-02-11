import React from "react";
import DishesCard from "../components/DishesCard";
import menu1 from "../img/menu1.jpg";
import menu2 from "../img/menu2.jpg";
import menu3 from "../img/menu3.jpg";
import Layout from '../components/Layouts/Layout'

const Menu = () => {
  return (
    <Layout>
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Premium Menu
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={menu1} title="Delicious Dish" price="$16.99" />
        <DishesCard img={menu2} title="Delicious Dish" price="$18.99" />
        <DishesCard img={menu3} title="Delicious Dish" price="$14.99" />
      </div>
    </div></Layout>
  );
};

export default Menu;