import React from "react";
import { QuestionAtBottom } from "../../utils/Data";
import "./css/question.css";

const Question = () => {
  return (
    <>
      <div className="outer-container mx-auto">
        <div className="container mx-auto">
          <div className="text max-w-[1280px] mx-auto">
            <div className="upper-text mt-[120px]">
              <p className="title font-mulish font-black text-textColor text-[60px] text-center lg:text-[50px] md:text-[40px] sm:text-[35px] mb:text-[28px]">
                Frequently asked questions
              </p>

              <div className="questions sm:grid grid-cols-2 px-6 mt-[60px] lg:gap-6 xl:px-6 lg:px-4 md:px-6 md:gap-x-6 sm:gap-x-6 mb:grid-cols-1 mb:gap-6 md:grid-cols-2">
                {QuestionAtBottom.map((data) => {
                  return (
                    <>
                      <div className="questions-answer mt-[60px] max-w-[592px]">
                        <p className="question text-start font-mulish xl:text-[24px] text-textColor mb:mb-[12px] mb:font-semibold lg:text-[18px] md:text-[16px] sm:text-[14px] mb:text-[12px]">
                          {data.questions}
                        </p>
                        <p className="answer font-mulish xl:text-[16px] text-[#52525B] text-justify md:text-[14px] sm:text-[11px] mb:text-[10px]">
                          {data.answer}
                        </p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="blue-area xl:h-[312px] w-full lg:mt-[80px] lg:h-[280px] md:h-[250px] md:mt-[70px] sm:py-[50px] mb:py-[40px] mb:px-4 mb:mt-[100px]">
            <div className="inner">
              <div className="title mx-auto">
                <p className="title font-mulish font-extrabold xl:text-[48px] text-[#FFFFFF] flex justify-center lg:text-[38px] md:text-[30px] sm:text-[25px] mb:text-[22px]">
                  Get results, no matter what
                </p>
                <div className="description text-[#ffffff] xl:text-[16px] font-mulish font-medium xl:mt-[16px] text-center xl:max-w-[614px] mx-auto lg:text-[14px] lg:max-w-[580px] md:max-w-[490px] md:text-[12px] md:mt-[12px] sm:mt-[10px] mb:mt-[9px] sm:text-[11px] mb:text-[10px]">
                  Start your free trial today, you get all the pro features for
                  1 month for you and your team. If you think its not for you
                  can easily unsubscribe
                </div>

                <button className="trial flex mx-auto bg-[#ffffff] xl:mt-[32px] xl:text-[16px] text-[#0E7490] font-mulish font-medium xl:py-4 xl:px-8 lg:py-3 lg:px-6 lg:text-[14px] lg:mt-[28px] md:mt-[24px] md:text-[12px] md:px-5 md:py-3  sm:mt-[12px] sm:px-4 sm:py-2.5 sm:text-[11px] mb:mt-[10px] mb:text-[10px] mb:px-3.5 mb:py-2">
                  Start free trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
