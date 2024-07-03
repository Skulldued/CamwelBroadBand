import React from "react";
import hero from "../assets/about_hero.png";
import about from "../assets/about.png";
import Card from "../Component/Card";
import { aboutCard } from "../Constant/index";
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <div className="w-full">
       <Helmet>
        <title>About Us</title>
      </Helmet>
      <div>
        <img src={hero} className="w-full " alt="" />
      </div>
      <div className="max-w-[1240px] mx-auto px-4 ">
        <div className="grid lg:grid-cols-2 mx-auto ">
          <div className="py-10 md:py-14">
            <div>
              <h4 className="font-bold md:text-3xl text-xl text-center md:text-start text-sky-500 py-2">
                About Camwel Broadband
              </h4>
              <p className="text-justify">
                Camwel Broadband In Patna is dedicated to revolutionizing
                internet services in India with innovative, user-friendly
                solutions. As the country's first fiber internet provider with
                our own network, we deliver exceptional internet experiences to
                both home and business consumers. Home users enjoy top-tier
                speeds of 20 Mbps and above with unlimited data at affordable
                prices, making us the preferred network in Pune. Our unique Tech
                Assist service helps customers optimize their internet-enabled
                devices.
              </p>
              <p className="text-justify">
                For businesses, our disruptive Business Internet Access (BIA)
                products, powered by Candore and Airtel, along with our
                data-center offerings, provide abundant resources and metered
                power, enabling them to maximize their budgets. Our commitment
                to excellence ensures continuous improvement in our services,
                contributing to the joy, advantage, and success of our
                customers.
              </p>
            </div>
          </div>
          <div className="lg:flex md:hidden justify-center py-4">
            <div className="flex justify-center">
              <img
                src={about}
                className="h-[350px] rounded-r-[150px] rounded-l-[150px]"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* card section start */}
        <div className="card grid md:grid-cols-3 gap-4 mx-auto px-10 py-10">
          {aboutCard.map((items, index) => (
            <div key={index}>
              <Card image={items.image} title={items.title} descrption={items.desc} />
            </div>
          ))}
        </div>
        {/* card section end */}
      </div>
    </div>
  );
};

export default About;
