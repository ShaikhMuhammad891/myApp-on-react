import React from "react";
import { BrandsLogo } from "../../utils/Data";

const Brands = () => {
  return (
    <>
      <div className="brands-area">
        <div className="brands max-w-[1440px] mt-[160px] mx-auto">
          <div className=" font-mulish text-[60px] leading-[69.3px] text-textColor font-black text-center mx-auto w-full sm:text-[40px] xl:text-[60px] xl:text-center mb:text-[30px]">
            Brands using our services
          </div>

          <div className="brands-logo grid grid-cols-4 mx-auto mt-[73px] max-w-[740px] sm:grid-cols-3 sm:mx-auto sm:w-[600px] xl:grid-cols-4 xl:max-w-[740px] xl:w-full xl:mx-auto mb:grid-cols-2 mb:gap-[20px] mb:px-6">
            {BrandsLogo.map((logos) => {
              return (
                <>
                  <div className="brands-logo">{logos.icon}</div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
