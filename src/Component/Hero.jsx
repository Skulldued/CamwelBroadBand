import React from "react";
import Card from "./Card";
import { cardHome } from "../Constant/index";
import {partner} from "../Constant/index";
import slide1 from "../assets/slide2.jpg"
import slide2 from "../assets/slider.jpg"
import slide3 from "../assets/slider3.jpg"
import slide4 from "../assets/slider4.jpg"
const Hero = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={slide1}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={slide2}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={slide3}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={slide4}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="welcome  max-w-[1240px] mx-auto px-6 md:px-0 ">
        <div className="md:py-16 py-10 flex justify-center flex-col">
          <h2 className="text-yellow-400 md:text-[25px] text-xl py-2 md:py-2 text-center font-bold">
            Welcome To Camwel Broadband
          </h2>
          <p className="lg:text-center text-justify">
            Our professional team at Camwel Broadband, first listens to the
            client's needs, and then utilizes the best new technologies to build
            significantly tailored solutions meet the utmost client's
            requirements, helping them to secure a competitive edge in an
            increasingly changing global market. We rely on the clients' success
            through our solutions as the measure of our own success.
          </p>
        </div>
        <div className="grid md:grid-cols-3 justify-center  md:px-4 lg:px-0 my-16 gap-4 w-full">
          {cardHome.map((items, index) => (
            <Card
              key={index}
              image={items.image}
              title={items.title}
              descrption={items.descrption}
            />
          ))}
        </div>
        {/* our partners start */}
        <div className="py-10">
            <h3 className="font-bold text-3xl text-center text-white">Our Partners</h3>
            <div className="grid md:grid-cols-3 my-16 gap-4 w-full">
              {
                  partner.map((items,index)=>(
                    <div className="flex justify-center">
                      <img src={items.images} alt="" />
                    </div>
                  ))
              }
            </div>
        </div>

        {/* our partners end */}
      </div>
    </div>
  );
};

export default Hero;
