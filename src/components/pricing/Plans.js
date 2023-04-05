import React from "react";
import { PricePlans } from "../../utils/Data";

const Plans = () => {
  return (
    <>
      <div className="plans">
        <div className="pricing-plans xl:max-w-[1280px] mx-auto mt-[100px]">
          {/* <ul className="xl:mt-[150px] md:mt-[130px] sm:mt-[100px]">
            <li className=" xl:mt-[38px] xl:text-[16px] text-[#27272A] font-mulish md:text-[12px] md:mt-[35px] sm:text-[10px] sm:mt-[27px]">All limited links</li>
            <li className=" xl:mt-[38px] xl:text-[16px] text-[#27272A] font-mulish md:text-[12px] md:mt-[35px] sm:text-[10px] sm:mt-[27px]">Own analytics platform</li>
            <li className=" xl:mt-[38px] xl:text-[16px] text-[#27272A] font-mulish md:text-[12px] md:mt-[35px] sm:text-[10px] sm:mt-[27px]">Chat support</li>
            <li className=" xl:mt-[38px] xl:text-[16px] text-[#27272A] font-mulish md:text-[12px] md:mt-[35px] sm:text-[10px] sm:mt-[27px]">Number of users</li>
            <li className=" xl:mt-[38px] xl:text-[16px] text-[#27272A] font-mulish md:text-[12px] md:mt-[35px] sm:text-[10px] sm:mt-[27px]">Optimize hashtags</li>
            <li className=" xl:mt-[38px] xl:text-[16px] text-[#27272A] font-mulish md:text-[12px] md:mt-[35px] sm:text-[10px] sm:mt-[27px]">Account manager</li>
            <li className=" xl:mt-[38px] xl:text-[16px] text-[#27272A] font-mulish md:text-[12px] md:mt-[35px] sm:text-[10px] sm:mt-[27px]">Number of articles</li>
            <li className=" xl:mt-[38px] xl:text-[16px] text-[#27272A] font-mulish md:text-[12px] md:mt-[35px] sm:text-[10px] sm:mt-[27px]">Satisfaction guaranteed</li>
          </ul> */}

          <div className="pricing grid md:grid-cols-4 md:max-w-[800px] md:px-6 xl:max-w-[1280px] xl:px-6 sm:grid-cols-3 sm:px-6 mb:grid-cols-2 mb:px-4 mb:gap-6 mx-auto">
            {PricePlans.map((plans, index) => {
              return (
                <>
                  <div className={`plans-include xl:max-w-[272px] w-full ${(index ===3)  && ' shadow-2xl bg-[#ffffff] ' } py-[51px] lg:py-[41px] ${(index === 2 || index=== 4) && 'md:hidden'} ${index === 2 && "sm:hidden"} sm:py-3 mb:max-w-[150px] mb:py-2`}>
                    <ul
                      className={`flex flex-col  items-center ${(index === 0 || index === 2 || index === 4 ) && " mb:items-start"}`}>
                      <li className={` xl:text-[28px] font-extrabold ${plans.titleColor} ${index===2 && 'text-[#ffffff]'} md:text-[24px] ${index === 3 && 'bg-gradient-to-l from-[#06B6D4] to-[#0284C7] bg-clip-text text-transparent'} `}>
                        {plans.title}
                      </li>
                      <li className= {`xl:text-[36px] font-bold lg:text-[28px] ${plans.priceC}`}>
                        {plans.price}
                          
                        <span className={` font-mulish text-[16px] font-medium text-[#52525B] ${(index === 0 || index === 2 || index === 4) && 'hidden'}`}>
                        /month
                        </span>
                      </li>
                      <li className= {` xl:text-[16px] ${plans.mtop} ${plans.textS} md:mt-[20px] md:text-[11.5px] sm:mt-[16px] sm:text-[11.5px] mb:mt-[13px] mb:text-[10px]`} >{plans.icon2}</li>
                      <li className= {` xl:text-[16px] ${plans.mtop} ${plans.textS} md:mt-[20px] md:text-[11.5px] sm:mt-[16px] sm:text-[11.5px] mb:mt-[13px] mb:text-[10px]`} >{plans.icon1}</li>
                      <li className= {` xl:text-[16px] ${plans.mtop} ${plans.textS} md:mt-[20px] md:text-[11.5px] sm:mt-[16px] sm:text-[11.5px] mb:mt-[13px] mb:text-[10px]`} >{plans.icon3}</li>
                      <li className= {` xl:text-[16px] ${plans.mtop} ${plans.textS} md:mt-[20px] md:text-[11.5px] sm:mt-[16px] sm:text-[11.5px] mb:mt-[13px] mb:text-[10px]`} >{plans.usersNumber}</li>
                      <li className= {` xl:text-[16px] ${plans.mtop} ${plans.textS} md:mt-[20px] md:text-[11.5px] sm:mt-[16px] sm:text-[11.5px] mb:mt-[13px] mb:text-[10px]`} >{plans.icon4}</li>
                      <li className= {` xl:text-[16px] ${plans.mtop} ${plans.textS} md:mt-[20px] md:text-[11.5px] sm:mt-[16px] sm:text-[11.5px] mb:mt-[13px] mb:text-[10px]`} >{plans.icon5}</li>
                      <li className= {` xl:text-[16px] ${plans.mtop} ${plans.textS} md:mt-[20px] md:text-[11.5px] sm:mt-[16px] sm:text-[11.5px] mb:mt-[13px] mb:text-[10px]`} >{plans.icon6}</li>
                      <li className= {` xl:text-[16px] ${plans.mtop} ${plans.textS} md:mt-[20px] md:text-[11.5px] sm:mt-[16px] sm:text-[11.5px] mb:mt-[13px] mb:text-[10px]`} >{plans.icon7}</li>
                      <li className = {` mt-[48px] px-[35px] py-[15px] ${plans.bg} ${plans.textC} lg:mt-[40px] lg:px-[30px] py-[12px] lg:text-[14px] md:px-[24px] md:py-[11px] md:text-[12px] sm:px-[20px] sm:py-[10px] sm:text-[10px] mb:px-[16px] mb:py-[8px] mb:text-[8px]`}>{plans.button}</li>


                    </ul>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
