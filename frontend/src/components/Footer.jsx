import React from "react";
import { assetsFrontend } from "../assets/frontend_assets/assetsFrontend";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assetsFrontend.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium ipsam deserunt neque harum provident ipsum esse
            reiciendis itaque placeat, qui doloribus totam, quisquam nemo
            repellendus quidem aut quod perspiciatis hic?
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+916254875275</li>
            <li>forever@gmail.com</li>
          </ul>
        </div>
      </div>
      <div> 
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2025@ forever.com - All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
