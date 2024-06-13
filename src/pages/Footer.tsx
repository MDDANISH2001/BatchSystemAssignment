import React from "react";
import logo from "../assets/Frame.png";
import { MdMail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

export const Footer: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-10">
      <div className="w-full max-w-screen-xl px-4 border-b-2 border-black flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 p-4 flex flex-col items-start md:items-center">
          <div className="flex gap-2 items-center mb-4">
            <img src={logo} alt="compLogo" />
            <div>
              <span className="font-bold text-2xl">uifry</span> <sup>tm</sup>
            </div>
          </div>
          <div className="flex items-center gap-2 text-red-500 mb-2">
            <MdMail />
            <span className="text-black">Help@Frybix.com</span>
          </div>
          <div className="flex items-center gap-2 text-red-500">
            <BsFillTelephoneFill />
            <span className="text-black">+1 234 456 678 89</span>
          </div>
        </div>
        <div className="w-full md:w-3/4 p-4">
            <table className="w-full">
              <thead className="hidden md:table-header-group">
                <tr>
                  <th className="text-left font-bold">Links</th>
                  <th className="text-left font-bold">Legal</th>
                  <th className="text-left font-bold">Product</th>
                  <th className="text-left font-bold">Newsletter</th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group">
                <tr className="block md:table-row">
                  <td className="py-1 block md:table-cell">
                    <span className="font-bold md:hidden">Links: </span>
                    <a href="#home">Home</a>
                  </td>
                  <td className="py-1 block md:table-cell">
                    <span className="font-bold md:hidden">Legal: </span>
                    <a href="#terms">Terms Of Use</a>
                  </td>
                  <td className="py-1 block md:table-cell">
                    <span className="font-bold md:hidden">Product: </span>
                    <a href="#tour">Take Tour</a>
                  </td>
                  <td className="py-1 block md:table-cell">
                    <span className="font-bold md:hidden">Newsletter: </span>
                    <a href="#tour">Stay Up To Date</a>
                  </td>
                </tr>
                <tr className="block md:table-row">
                  <td className="py-1 block md:table-cell">
                    <span className="font-bold md:hidden">Links: </span>
                    <a href="#about">About Us</a>
                  </td>
                  <td className="py-1 block md:table-cell">
                    <span className="font-bold md:hidden">Legal: </span>
                    <a href="#privacy">Privacy Policy</a>
                  </td>
                  <td className="py-1 block md:table-cell">
                    <span className="font-bold md:hidden">Product: </span>
                    <a href="#chat">Live Chat</a>
                  </td>
                  <td className="py-1 block md:table-cell" rowSpan={3}>
                    <span className="font-bold md:hidden">Newsletter: </span>
                    <div className="flex">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="p-2 border border-gray-300 rounded-l-md w-full md:w-auto"
                      />
                      <button className="bg-black text-white p-2 rounded-r-md">
                        Subscribe
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="block md:table-row">
                  <td className="py-1 block md:table-cell">
                    <span className="font-bold md:hidden">Links: </span>
                    <a href="#bookings">Bookings</a>
                  </td>
                  <td className="py-1 block md:table-cell">
                    <span className="font-bold md:hidden">Legal: </span>
                    <a href="#cookie">Cookie Policy</a>
                  </td>
                  <td className="py-1 block md:table-cell">
                    <span className="font-bold md:hidden">Product: </span>
                    <a href="#reviews">Reviews</a>
                  </td>
                </tr>
                <tr className="block md:table-row">
                  <td className="py-1 block md:table-cell">
                    <span className="font-bold md:hidden">Links: </span>
                    <a href="#blog">Blog</a>
                  </td>
                  <td className="py-1 block md:table-cell"></td>
                  <td className="py-1 block md:table-cell"></td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
      <div className="py-8">
      Copyright 2022 uifry.com all rights reserved
      </div>
    </div>
  );
};

export default Footer;
