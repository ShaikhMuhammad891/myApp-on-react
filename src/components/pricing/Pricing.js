import React from "react";
import Plans from "./Plans";
import Question from "./Question";
// import Header from "./Header";

const Pricing = () => {
  return (
    <>
        <div className="pricing ">
          <div className="text-area xl:mt-[140px] xl:max-w-[800px] mx-auto lg:mt-[125px] md:mt-[100px] lg:max-w-[700px] md:max-w-[600px] sm:max-w-[500px] sm:mt-[70px] mb:mt-[50px] mb:max-w-[400px] mb:px-4">
            <p className="front-written font-mulish xl:text-[93px] font-black  text-textColor xl:leading-[115.2px] lg:text-[80px] md:text-[60px] sm:text-[40px] mb:text-[25px] text-center max-w-[800px]">
              SIMPLE PRICING
            </p>
            <p className="description font-mulish xl:text-[20px] text-[#52525B] text-center xl:mt-[13px] lg:text-[16px] md:mt-[11px] md:text-[14px] sm:text-[12px] sm:mt-[10px] mb:mt-[8px] mb:text-[10px]">
              No contracts. No surprise fees. Register now or try out the
              Webbber free trial so you’re absolutely sure that it’s the right
              fit for your frontend team
            </p>
          </div>

          <div className="button-points max-w-max mx-auto mt-[68px]">
            <button className="right xl:text-[12px] font-semibold bg-primary text-[#FAFAFA] xl:px-[24px] xl:py-[16px] lg:px-[22px] lg:py-[14px] lg:text-[10px] md:text-[9px] md:px-[20px] md:py-[13px] sm:px-[18px] sm:py-[11.5px] sm:text-[8px] mb:px-[16px] mb:py-[10px] mb:text-[7px]">
              MONTHLY
            </button>
            <button className="left xl:text-[12px] font-semibold bg-[#CFFAFE] text-primary xl:px-[32px] xl:py-[16px] lg:text-[10px] lg:px-[28px] lg:py-[14px] md:text-[9px] md:px-[24px] md:py-[13px] sm:px-[21px] sm:py-[12px] sm:text-[8px] mb:px-[20px] mb:py-[10px] mb:text-[7px]">
              YEARLY
            </button>
          </div>
        </div>

        <Plans />
        <Question />
    </>
  );
};

export default Pricing;
