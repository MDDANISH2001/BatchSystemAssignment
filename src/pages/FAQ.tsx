import React from "react";
import star from "../assets/Star 1.png";

export const FAQs: React.FC = () => {
  const data = [
    {
      bgColor: "#FF5555",
      head: "the best financial accounting app ever!",
      content:
        "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      bgColor: "#",
      head: "the best financial accounting app ever!",
      content:
        "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      bgColor: "#",
      head: "the best financial accounting app ever!",
      content:
        "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      bgColor: "#FF5555",
      head: "the best financial accounting app ever!",
      content:
        "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      bgColor: "#FF5555",
      head: "the best financial accounting app ever!",
      content:
        "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      bgColor: "#",
      head: "the best financial accounting app ever!",
      content:
        "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
  ];
  return (
    <div className="w-full min-h-[100vh] flex justify-center relative items-center">
      <div className="w-full h-full flex items-center justify-center flex-col">
        <div className="w-[100%]">
          <div className="text-[#FF5555] font-[600] tracking-widest">FAQ</div>
          <div className="text-[40px] font-[ClashDisplay-Bold] w-[100%] sm:w-[70%] lg:w-[50%]">
            Frequently Asked Questions!
          </div>
        </div>
        <div className="h-fit relative grid grid-cols-1 sm:grid-cols-2 w-[90%]">
          {data.map((item, key) => (
            <div key={key} className={`rounded-md m-2 p-4 ${item.bgColor !== "#" ? "bg-[#FF5555] text-white" : ""}`}>
              <div className="font-bold">{item.head}</div>
              <div>{item.content}</div>
            </div>
          ))}
        </div>
        <div className="absolute top-[8%] -left-[8%] -rotate-[20deg]">
          <img src={star} className="w-[80%]" alt="star" />
        </div>
      </div>
    </div>
  );
};
