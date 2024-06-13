import React from "react";
import testImg from "../assets/testimonial.png";
import bellIcon from '../assets/bell.png';
import { Structure } from "@/components/Structure";

export const Testimonials: React.FC = () => {
  return (
    <Structure imgLeft={true} test={true}>
      <div className="w-full text-center flex flex-col items-center">
        <div className="font-[600] tracking-widest">TESTIMONIALS</div>
        <div className="text-[40px] font-[ClashDisplay-Bold] w-[100%] lg:w-[40%]">
          What Our Users Say About Us?
        </div>
      </div>
      <div className="hidden justify-center items-center lg:flex w-full mt-10">
        <img src={testImg} className="w-[80%]" alt="iphone" />
      </div>
      <div className="h-full lg:h-[60%] relative mt-10 lg:mt-0">
        <div className="text-[#FF5555] font-[600] tracking-widest">
          ADVANTAGES
        </div>
        <div className="text-[40px] font-[ClashDisplay-Bold]">
          Why Choose Urify?
        </div>
        <div className="flex items-center gap-2 mt-4">
          <img src={bellIcon} alt="notification" />
          <div className="font-[800] text-[25px]"> Clever Notifications</div>
        </div>
        <div className="mt-4">
          Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
        </div>
      </div>
      <div className="hidden lg:flex w-full justify-center items-center mt-10">
        <img src={testImg} className="w-[80%]" alt="iphone" />
      </div>
    </Structure>
  );
};
