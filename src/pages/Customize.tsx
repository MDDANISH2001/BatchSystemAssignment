import React from "react";
import customIphone from "../assets/cusomizable.png";
import customImg from '../assets/customize.png'
import { Structure } from "@/components/Structure";
export const Customize: React.FC = () => {
  
  return (
    <Structure imgLeft={true} test={false}>
        <div className="hidden lg:flex w-[100%] items-center">
          <img src={customIphone} className="" alt="iphone" />
        </div>
        <div className="h-full lg:h-[60%] relative">
          <div className="flex items-center gap-2 my-4">
            <img src={customImg} alt="notification" />
            <div className="font-[800] text-[25px]"> Fully Customizable</div>
          </div>
          <div>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</div>
        </div>
    </Structure>
  );
};
