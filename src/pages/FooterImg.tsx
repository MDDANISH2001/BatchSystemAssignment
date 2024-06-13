import React from "react";
import star from "../assets/Star 1.png";
import frame1 from "../assets/Frame (1).png";
import bgColor from "../assets/Group 35896.png";

export const FooterImg: React.FC = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center relative items-center">
      <div className="w-full h-full flex items-center justify-center flex-col">
        <img src={frame1} alt="frame1" />
        <div className="hidden lg:flex absolute -top-[5%] -left-[15%] -z-50">
          <img src={bgColor} alt="bgColor" />
        </div>
        <div className="absolute bottom-[25%] -left-[8%] -rotate-[20deg]">
          <img src={star} className="w-[50%]" alt="star" />
        </div>
      </div>
    </div>
  );
};
