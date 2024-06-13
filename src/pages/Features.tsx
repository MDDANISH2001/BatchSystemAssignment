import React from "react";
import featureImage from "../assets/feature.png";
import starBullet from "../assets/star-05.png";
import netCube from "../assets/cube-02.png";
import cube from "../assets/cube-04.png";
import { Structure } from "@/components/Structure";
export const Features: React.FC = () => {
  const featureData = [
    {
      icon: starBullet,
      head: "Budgeting Intervals",
      content:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
    {
      icon: netCube,
      head: "Budgeting Intervals",
      content:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
    {
      icon: cube,
      head: "Budgeting Intervals",
      content:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
  ];
  return (
    <Structure imgLeft={true} test={false}>
        <div className="hidden lg:flex w-[100%] items-center">
          <img src={featureImage} className="" alt="iphone" />
        </div>
        <div className="h-full lg:h-[60%] relative">
          <div className="text-[#FF5555] font-[600] tracking-widest">
            FEATURES
          </div>
          <div className="text-[40px] font-[ClashDisplay-Bold]">
            Uifry Premium
          </div>
          {featureData.map((item, key) => (
            <div key={key}>
              <div className="flex gap-2 items-center text-[18px] font-[600] pt-6 pb-2">
                <img src={item.icon} alt="starBullet" />
                {item.head}
              </div>
              <div>{item.content}</div>
            </div>
          ))}
        </div>
    </Structure>
  );
};
