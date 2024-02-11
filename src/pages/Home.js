import React from "react";
import Layout from "../components/Layouts/Layout";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Banner1 from "../images/Banner1.jpg";
import Banner2 from "../images/Banner2.jpg";
import Banner3 from "../images/Banner3.jpg";
import "../styles/Homestyle.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: Banner3,
  },
  {
    url: Banner2,
  },
  {
    url: Banner1,
  },
];
// const spanStyle = {
//   padding: '20px',
//   background: '#efefef',
//   color: '#000000'
// }

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "650px",
};

const Home = () => {
  return (
    <Layout>
      <div className="Home">
        {
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                ></div>
              </div>
            ))}
          </Slide>
        }

        <div className="w-full space-y-5 headerContainer lg:w-2/3">
          <h1 className="text-6xl font-semibold text-backgroundColor">Food Website</h1>
          <p>Best Food in India</p>
          <div/>  
          <Link to="/Menu">
            <Button>ORDER NOW</Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
