import React from "react";
import broadher from "../assets/broad.jpg";
import { cardPlandata } from "../Constant/index";
import CardPlan from "../Component/CardPlan";
import { Helmet } from "react-helmet";

const Broadband_plan = () => {
  return (
    <div>
      <Helmet>
        <title>Broadband Plan</title>
      </Helmet>
      <div className="w-full bg-backgroun-broad ">
        <div className="">
          <img src={broadher} className="object-cover w-full" alt="" />
        </div>
        <div className="max-w-[1240px] mx-auto py-10 px-4">
          <div className="grid md:grid-cols-3  gap-10 mx-auto">
            {cardPlandata.map((items, index) => (
              <div
                className="hover:bg-slate-800 duration-300 hover:border-sky-600 rounded-xl"
                key={index}
              >
                <CardPlan
                  title={items.title}
                  number={items.number}
                  month={items.month}
                  price={items.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Broadband_plan;
