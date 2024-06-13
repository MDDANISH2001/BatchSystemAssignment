import React from "react";
import frontPhone from "../assets/iPhone-13-Pro-Front.png";
import middlePhone from "../assets/iPhone-13-Pro-Front (1).png";
import backPhone from "../assets/Group 1000004720.png";
import ribbon from "../assets/Group 35924.png";
import star from '../assets/Star 1.png'
import bgColor from '../assets/Group 35896.png'
import { IoPlayCircleOutline } from "react-icons/io5";

export const Home: React.FC = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-full pt-16 h-full flex">
        <div className="flex flex-col w-[100%] lg:w-[50%] relative">
          <img src={bgColor} alt='bgColor'className="absolute -top-20 -right-24"/>
          <div className="pt-5 mt-5 overflow-y-visible z-20">
            <span className="lg:text-[60px] text-[40px] font-[ClashDisplay-Bold] z-20">
              Make The Best Financial Decisions
            </span>{" "}
            <br />
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </div>
          <div className="sm:flex mt-6">
            <button className="py-3 px-6 font-[200] lg:font-[600] bg-black text-white rounded-md">
              Get Started {" "}
              <span>→</span>
            </button>
            <button className="py-3 px-6 gap-2 font-[600] flex items-center">
              <span className="text-[24px]"><IoPlayCircleOutline /></span>
              Watch Video
            </button>
          </div>
          <div className="w-fit h-fit">
            <img src ={ribbon} alt="ribbon" />
          </div>
        </div>
        <div className="relative w-[50%] hidden lg:flex">
            <div className="absolute h-fit z-20 right-[10%] -top-[1%]">
                <img src={middlePhone} className="drop-shadow-2xl duration-200 hover:rotate-[15deg] w-[90%] hover:w-[120%]" alt="iPhone" />
            </div>
            <div className="absolute h-fit z-10 -right-[1%] top-[11%] hover:z-30">
                <img src={frontPhone} className="drop-shadow-2xl duration-200 hover:rotate-[15deg] w-[90%] hover:w-[120%]" alt="iPhone" />
            </div>
            <div className="absolute -right-[42%] -top-[5%]">
                <img src={backPhone} className="w-[90%]" alt="iPhone" />
            </div>
        </div>
      <div className="absolute top-2% left-[2%] -rotate-[20deg]">
        <img src={star} className="w-[80%]"alt='star'/>
      </div>
      </div>
    </div>
  );
};
