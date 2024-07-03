import React from "react";
import cctvhero from "../assets/cctvhero.jpg";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png"
import CardCctv from "../Component/CardCctv";
import {cctvPageData} from "../Constant/index";
import { Helmet } from "react-helmet";
const Cctv = () => {
  console.log(cctvPageData);
  return (
    <div className="w-full">
        <Helmet>
        <title>CCTV</title>
      </Helmet>
      <div>
        <img src={cctvhero} className="w-full" alt="" />
      </div>
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="grid md:grid-cols-2 mx-auto py-16">
          <div className="flex justify-center items-center">
            <div>
              <h3 className="md:text-3xl  text-xl font-bold text-yellow-500">CCTV Camera Services</h3>
              <div>
                <p className="text-justify">
                  The Company is specialized in CCTV Installation. Who have a
                  wealth of knowledge and experience in Software and CCTV. We
                  specialise in CCTV only providing well-known and
                  well-supported CCTV products and services such as CP Plus,
                  Hikvision, Sony, Panasonic, Samsung and other brands to the
                  marketplace.
                </p>
                <p className="text-justify">
                  We are able to provide service and support on a national basis
                  with our In House team based in Pune and a network of
                  experienced technical agents throughout India. These agents
                  are controlled from a single point of contact in Pune which,
                  experience shows, provides many benefits to our clients and
                  customers.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <img src={c1} alt="@dued" />
            </div>
          </div>
        </div>
        {/* second */}
        <div className="grid md:grid-cols-2 mx-auto py-16">
          <div className="flex justify-center ">
            <div >
              <img src={c2} alt="@dued" className="sm:order-last" />
            </div>
          </div>
          <div className="flex justify-center items-center sm:py-6 ">
            <div>
              <h3 className="text-3xl font-bold text-yellow-500">Why Specialist?</h3>
              <div>
                <p className="text-justify">
                  At Camwel, we believe that it is important to provide
                  specialist skills and knowledge in every field of security.
                  This is why we have chosen to provide a separate CCTV service
                  to our customers. Our team of professionals will provide you
                  with the best advice available and select only the most
                  appropriate equipment for your application.
                </p>
                <p className="text-justify">
                  Ensuring that your CCTV system operates as a profit center for
                  your business is foremost in our mind. Therefore our team will
                  design a system that provides you and your business with the
                  benefits you need to enhance your profits while protecting you
                  against loss and potential loss. It should also be remembered
                  that the vast majority of retail crime occurs during business
                  hours and as such it will be the CCTV system that will provide
                  the most benefits to the end user.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* card component start */}
        <div className="w-full py-10">
          <div className="grid md:grid-cols-3 lg:gap-4 justify-center my-3 mx-auto">
             {
              cctvPageData.map((items,index)=>(
                <div key={index} className="my-4">
                  <CardCctv image={items.image} title={items.title} description={items.description}/>
                </div>
              ))
             }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cctv;
