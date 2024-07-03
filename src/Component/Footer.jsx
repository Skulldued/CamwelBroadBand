import React from "react";
import logo from "../assets/logo.png";
import { footerMenu } from "../Constant/index";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className=" w-full  bg-[#161D2F] ">
      <div className=" max-w-[1240px] mx-auto grid p-10 gap-12 md:grid-cols-3 ">
        <div>
          <div className="space-y-3">
           <Link to="/" > <img src={logo} className="w-28" alt="" /></Link>
            <p className="text-justify">
              At Camwel Broadband, we prioritize client needs, employing
              cutting-edge technology to craft tailored solutions that ensure a
              competitive edge in the evolving global market.
            </p>
          </div>
        </div>
        <div className="lg:flex justify-center">
          <div>
            {footerMenu.map((items, index) => (
              <div className="space-y-3" key={index}>
                <h4> {items.title}</h4>
                {items.links && (
                  <ul>
                    {items.links.map((link, index) => (
                     <li key={index}> <Link to={link.path}>{link.name}</Link></li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          {footerMenu.map((items, index) => (
            <div className="space-y-3" key={index}>
              <span>
                <h4> {items.Address}</h4>
              </span>

              <div>
                {items.address && <p>{items.address}</p>}
                {items.call && (
                  <span className="flex items-center gap-4">
                    {<items.icon />}
                    <a href={`tel:${items.call}`}>{items.call}</a>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-slate-800">
          <p className="text-center py-2">CopyRight @ 2024 CamwelBroadband</p>
      </div>
    </div>
  );
};

export default Footer;
