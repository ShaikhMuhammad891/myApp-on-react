import React from "react";
import "../css/number.css"
import { numberList } from "../../utils/Data";
const Numbers = () => {
  return (
    <>
      <div className="number-data w-full mt-[280px] sm:mt-[150px] ">
        <div className="blue-section w-full h-[382px] mt-0 pt-[80px] sm:pt-[50px] sm:h-[260px] xl:h-[382px] mb:h-[200px] mb:pt-[35px]">
          <p className="title font-mulish text-[60px] text-[#ffffff] text-center leading-[60px] font-black sm:text-[40px] xl:text-[60px] mb:text-[30px]">
            By the numbers
          </p>
          <p className="description mt-[24px] text-[#ffffff] font-mulish text-[18px] text-center sm:mt-[14px] sm:text-[18px] xl:mt-[24px] mb:mt-[12px] mb:text-[12px]">
            5 years, consistent quality and you get results. No matter what
          </p>
        </div>

        <div className="box-section grid grid-cols-4 max-w-[1116px] drop-shadow gap-[32px] mx-auto sm:gap-[20px] sm:w-[600px] sm:mx-auto xl:max-w-[1116px] xl:w-full xl:gap-[32px] mb:gap-[16px] ">
          {numberList.map((list) => {
            return (
              <>
                <div className="boxes text-center bg-[#ffffff] max-w-[255px] h-[226px] rounded-[16px] flex flex-col justify-center drop-shadow xl:mt-[-113px] sm:h-[155px] sm:mt-[-70px] xl:h-[226px] mb:mt-[-50px] mb:h-[135px]">
                  <p className="numbers font-mulish text-[48px] font-extrabold text-textColor sm:text-[30px] xl:text-[48px] mb:text-[24px]">
                    {list.number}
                  </p>
                  <p className="description font-mulish text-[18px] font-normal text-textColor sm:text-[14px] xl:text-[18px] mb:text-[12px]">
                    {list.description}
                  </p>
                </div>
              </>
            );
          })}
        </div>

        <div className="lower-area">
          <div className="text-at-last mt-[153px] max-w-[1440px] mx-auto sm:w-[600px] xl:max-w-[1440px] xl:w-full">
            <p className="text font-mulish text-[48px] text-center text-textColor font-black max-w-[792px] m-auto sm:text-[30px] xl:text-[48px] mb:text-[24px]">
              Build the next big thing and ship to market faster{" "}
            </p>
          </div>

          <div className="btn text-center mt-[60px] p-0 max-w-[1440px] mx-auto mb-[152px]">
            <button className="btn-inner m-auto px-[32px] py-[16px] rounded-sm font-mulish text-[#ffffff] text-[18px] sm:text-[14px] sm:py-[10px] sm:px-[20px] xl:px-[32px] xl:py-[16px] xl:text-[18px] mb:px-[16px] mb:py-[8px] mb:text-[12px]">
              Download Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Numbers;
