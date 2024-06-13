import React from "react";
import advImg from "../assets/advantages.png";
import bellIcon from '../assets/bell.png'
import { Structure } from "@/components/Structure";
export const Advantages: React.FC = () => {
  
  return (
    <Structure imgLeft={false}  test={false}>
        <div className="hidden lg:flex w-[100%] items-center">
          <img src={advImg} className="" alt="iphone" />
        </div>
        <div className="h-full lg:h-[60%] relative">
          <div className="text-[#FF5555] font-[600] tracking-widest">
            ADVANTAGES
          </div>
          <div className="text-[40px] font-[ClashDisplay-Bold]">
            Why Choose Urify?
          </div>
          <div className="flex items-center gap-2 my-4">
            <img src={bellIcon} alt="notification" />
            <div className="font-[800] text-[25px]"> Clever Notifications</div>
          </div>
          <div>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</div>
        </div>
    </Structure>
  );
};
