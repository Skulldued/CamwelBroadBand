import React, { useState } from "react";
import { navLink } from "../Constant/index";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
const Navbarbottom = () => {
  const [nav,setNav] = useState(false);
  const HandleClick = ()=>{
    setNav(!nav);
  }
  return (
    <div className="w-full bg-[#00142E] min-h-[70px]">
      <div className="flex justify-between items-center py-4 px-16">
        <div>
          <img src={logo} className="h-9" alt="@dued" />
        </div>
        <div className="lg:hidden flex" onClick={HandleClick}>
          {
            nav?<IoCloseSharp/>: <RiMenu2Fill />
          }
          
         
        </div>
        <div className="lg:flex hidden flex-row  gap-5">
          {navLink.map((items, index) => (
            <ul key={index} className=" text-white">
              <Link className="" to={items.path}>
                {" "}
                <li className="cursor-pointer">{items.title}</li>
              </Link>
            </ul>
          ))}
        </div>
        {/* Mobile view */}
        <div className={nav?"flex lg:hidden flex-col absolute ease-out duration-500 delay-500 top-[70px] md:top-[110px] bg-black w-full left-0 p-8  gap-5":"absolute left-[-100%]"}>
          {navLink.map((items, index) => (
            <ul key={index} className=" text-white">
              <Link className="" to={items.path}>
                {" "}
                <li className="cursor-pointer">{items.title}</li>
              </Link>
            </ul>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Navbarbottom;
