import React from "react";
import Layout from '../components/Layouts/Layout';
import ReviewCard from "../components/Layouts/ReviewCard";
import img1 from "../img/pic1.png";
import img2 from "../img/pic2.png";
import img3 from "../img/pic3.png";

const Review = () => {
  return (
    <Layout>
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} name="Sophia Azura" />
        <ReviewCard img={img2} name="John Deo" />
        <ReviewCard img={img3} name="Victoria Zoe" />
      </div>
    </div>
    </Layout>
  );
};

export default Review;
