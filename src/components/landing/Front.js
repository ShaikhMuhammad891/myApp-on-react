import React from "react";
import "../css/front.css";
const Front = () => {
  return (
    <>
      <div className="front">
        <div className="front text-center mt-[125px] flex justify-center max-w-[1440px] mx-auto">
          <div className="front-page max-w-[981px]  text-textColor font-mulish text-[96px] font-black text-center sm:text-[70px] md:max-w-[800px]  md:text-[75px] xl:text-[96px] mb:text-[45px]">
            DEPLOY YOUR FRONT-END
          </div>
        </div>
        <div className="buttons max-w-[1440px] mt-[78px] p-0 mx-auto">
          <div className="twoButtons flex justify-center gap-[20px] mb:gap-[10px]">
            <button className="btn-left text-[18px] text-[#FFFFFF] font-mulish py-[16px] px-[32px] sm:text-[14px] sm:px-[20px] sm:py-[10px] xl:px-[32px] xl:py-[16px] mb:px-[16px] mb:py-[8px] mb:text-[12px]">
              Get Started
            </button>
            <button className="btn-right font-mulish py-[16px] px-[32px] text-primary bg-secondary rounded-sm sm:text-[14px] sm:px-[20px] sm:py-[10px] xl:px-[32px] xl:py-[16px] mb:px-[16px] mb:py-[8px] mb:text-[12px]">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Front;
