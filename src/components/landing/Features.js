import React from "react";
import list from "../../utils/Data";

const Features = () => {
  return (
    <>
      <div className="our-features">
        <div className="features max-w-[1440px] mt-[155px] pt-0 mx-auto sm:mt-[50px]">
          <div className="top-text text-center">
            <p className=" font-mulish font-black text-[60px] text-textColor sm:text-[40px] xl:text-[60px] mb:text-[30px]">
              Tailor-made features
            </p>
          </div>

          <div className="grid grid-cols-3 mx-auto max-w-[1110px] mt-[93px] p-0 gap-[30px] sm:grid-cols-2 sm:mx-auto sm:w-[600px] md:grid-cols-3 md:w-full md:px-6 xl:gap-[30px] mb:grid-cols-1 mb:px-4">
            {list.map((data) => {
              return (
                <>
                  <div className="grid-items flex flex-col items-center">
                    <div className="icons ">{data.icon}</div>
                    <div className="title text-[#27272A] text-[24px] font-mulish font-semibold mt-[25px] md:text-[18px] xl:text-[24px]">
                      {data.title}
                    </div>
                    <div className="description text-center text-[18px] font-normal font-mulish mt-[8px] md:text-[14px] xl:text-[18px]">
                      {data.description}
                    </div>
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

export default Features;
