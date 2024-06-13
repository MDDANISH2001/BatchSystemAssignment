import React from "react";
import star from "../assets/Star 1.png";
import bgColor from '../assets/Group 35896.png';

interface IStructure {
  children: React.ReactNode;
  imgLeft: boolean;
  test: boolean;
}

export const Structure: React.FC<IStructure> = ({ children, imgLeft, test }) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-center relative items-center py-10">
      {test && (
        <div className="w-full absolute top-20">
          {childrenArray[0]}
        </div>
      )}
      <div className={`${test ? "mt-48" : ""} w-full h-fit flex flex-col lg:flex-row items-center overflow-x-hidden overflow-y-hidden`}>
        <div className={`${imgLeft ? "hidden lg:flex" : ""} w-full lg:w-1/2 items-center`}>
          {test ? (imgLeft ? childrenArray[1] : childrenArray[2]) : (imgLeft ? childrenArray[0] : childrenArray[1])}
        </div>
        <div className={`${imgLeft ? "" : "hidden lg:flex"} flex justify-center items-center w-full lg:w-1/2 h-full lg:h-[60%] relative`}>
          {test ? (imgLeft ? childrenArray[2] : childrenArray[1]) : (imgLeft ? childrenArray[1] : childrenArray[0])}
          <div className="hidden lg:flex absolute -top-[5%] -right-[5%] -z-50">
            <img src={bgColor} alt="bgColor" />
          </div>
        </div>
      </div>
      <div className="absolute top-[8%] -left-[8%] -rotate-[20deg]">
        <img src={star} className="w-[80%]" alt="star" />
      </div>
    </div>
  );
};
