import React from "react";
import cctvhero from "../assets/cctv.jpg";
import viruse from "../assets/virus.png";
import ram from "../assets/ram.png";
import service from "../assets/service.png";
import window11 from "../assets/window11.png";
import { services } from "../Constant/index";
import Card from "../Component/Card";
import { Helmet } from "react-helmet";
const Computer_laptop = () => {
  return (
    <div className="w-full">
       <Helmet>
        <title>Computer & Laptop</title>
      </Helmet>
      <div>
        <img src={cctvhero} className="w-full" alt="" />
      </div>
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 py-16 mx-auto">
          <div>
            <div className="border hover:border-sky-800 duration-300 hover:scale-75 flex flex-col justify-center items-center rounded-lg p-2">
              <img src={viruse} className="p-2" alt="" />
              <p className="pb-4 sm:text-center">Remove Viruses and Malware</p>
            </div>
          </div>
          <div>
            <div className="border hover:border-sky-800 duration-300 hover:scale-75 flex flex-col justify-center items-center rounded-lg p-2">
              <img src={ram} className="p-2" alt="" />
              <p className="pb-4 sm:text-center">Remove Viruses and Malware</p>
            </div>
          </div>
          <div>
            <div className="border hover:border-sky-800 duration-300 hover:scale-75 flex flex-col justify-center items-center rounded-lg p-2">
              <img src={service} className="p-2" alt="" />
              <p className="pb-4 sm:text-center">Remove Viruses and Malware</p>
            </div>
          </div>
          <div>
            <div className="border hover:border-sky-800 duration-300 hover:scale-75 flex flex-col justify-center items-center rounded-lg p-2">
              <img src={window11} className="p-2" alt="" />
              <p className="pb-4 sm:text-center">Remove Viruses and Malware</p>
            </div>
          </div>
        </div>
        {/* card section start here */}
        <div className="grid md:grid-cols-3 justify-center md:gap-10 card-container">
          {services.map((items, index) => (
            <div key={index} className="py-6 flex">
              <div className="card flex flex-col">
                <Card image={items.image} title={items.title} descrption={items.description} />
              </div>
            </div>
          ))}
        </div>
        {/* card section end here */}
      </div>
    </div>
  );
};

export default Computer_laptop;
