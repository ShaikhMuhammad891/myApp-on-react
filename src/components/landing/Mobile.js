import React from "react";
import { LeftArrow, MobileLogo, Quotes, RightArrow } from "../../utils/Logos";
import "../css/mobile.css";

const Mobile = () => {
  return (
    <>
      <div className="mobile-area">
        <div className="mobile pt-[165px] max-w-[1440px] mx-auto">
          <div className="text-area flex justify-center">
            <p className="text text-[60px] font-mulish font-black text-textColor sm:text-[40px] md:text-[45px] xl:text-[60px] mb:text-[30px]">
              How it works
            </p>
          </div>

          <div className="text-mobile-portion flex mt-[105px] justify-between max-w-[1140px] mx-auto mr-[120px] sm:flex-wrap sm:w-[600px] sm:mx-auto gap-y-6 sm:mt-[60px] md:flex md:justify-between md:flex-nowrap md:w-full md:px-6 md:gap-6 xl:mr-[120px] mb:flex-wrap mb:mx-auto mb:px-4">
            <div className="left-area flex flex-col justify-center max-w-[570px] md:gap-6">
              <p className="title font-mulish text-[48px] text-textColor font-extrabold sm:text-[30px] md:text-[40px] xl:text-[48px]">
                Sign up
              </p>
              <p className="description font-mulish text-[#52525B] text-[20px] font-normal text-justify p-0 mt-[24px] sm:text-[16px] md:text-[18px] xl:text-[20px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
                vitae a consectetur dolor. Elementum habitant urna, ac quis
                laoreet urna purus. Aliquam at est vel auctor rhoncus et. Sit ac
                enim, malesuada mattis. Dignissim nibh augue posuer
              </p>

              <div className="btns flex justify-between mt-[34px]">
                <div className="left-btn">
                  <button className=" font-mulish text-[#FFFFFF] text-[16px] px-[32px] py-[16px] md:px-[20px] md:py-[10px] xl:text-[16px] xl:px-[32px] mb:px-[16px] mb:py-[8px] mb:text-[12px]">
                    Learn more
                  </button>
                </div>
                <div className="arrows flex items-center gap-[24px] ">
                  <div className="left-arrow">
                    <LeftArrow  className = ""/>
                  </div>
                  <div className="right-arrow bg-[#0891B2] rounded-full p-4 md:p-2 xl:rounded-full xl:p-4 mb:rounded-full mb:px-2 mb:py-2">
                    <RightArrow />
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-area">
              <MobileLogo />
            </div>
          </div>
        </div>

        {/* lower-blue-body */}

        <div className="lower-portion w-full ">
          <div className=" h-[280px] mt-[250px] grid grid-cols-3 items-center max-w-[1110px] mx-auto sm:h-[160px] md:max-w-[900px] md:h-[200px] xl:h-[280px] xl:max-w-[1110px] xl:w-full mb:h-[180px]">
            <div className="left-side h-[128px] flex items-end gap-[16px] sm:h-[60px] sm:gap-[10px] xl:h-[128px] xl:gap-[16px] mb:h-[64px] mb:items-center mb:pb-2">
              <img
                src="./images/Picture.png"
                alt=""
                className=" sm:w-[45px] sm:ml-2 xl:w-[70px] mb:w-[35px]"
              />
              <div className="name-title">
                <p className="name font-mulish font-semibold text-[18px] text-[#ffffff] md:text-[16px] xl:text-[18px] mb:text-[14px]">
                  Jenny Wilson
                </p>
                <p className="position font-mulish font-normal text-[14px] text-[#ffffff] sm:text-[10px] md:text-[14px] xl:text-[14px] mb:text-[12px]">
                  Vice President
                </p>
              </div>
            </div>

            <div className="right-side col-span-2 flex max-w-[817px] gap-[17px] sm:gap-[12px] sm:px-4 xl:gap-[16px] mb:px-2">
              <p className=" font-mulish font-extrabold text-[72px] sm:text-[48px] xl:text-[72px] mb:text-[20px] mb:font-medium">
                <Quotes className = "" />
              </p>

              <p className="text-area font-mulish text-[18px] font-semibold text-[#FFFFFF] text-justify sm:text-[10px] md:text-[14px] xl:text-[18px] mb:text-[10px]">
                Eos enim quo est necessitatibus nobis consectetur rerum qui
                dolores. Quia commodi similique est sed aut. Aspernatur voluptas
                nisi tenetur voluptates iusto debitis ex voluptatem odit.
                Repudiandae et et quod et. Enim sit delectus numquam. Molestiae
                aut voluptatem. Quia commodi similique est sed aut. Aspernatur
                voluptas nisi tenetur voluptates iusto debitis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;
