import React from "react";
import { FooterItems } from "../../utils/Data";
import "./css/inner.css";
import { ReadArrow } from "../../utils/Logos";

const CaseInner = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="case-inner mt-[150px] mb-[-150px] mx-auto max-w-[1280px]">
          <div className="flex justify-between max-w-[1280px] mx-auto mb:flex-wrap mb:mx-8 lg:flex-nowrap lg:gap-x-8 lg:px-4">
            <div className="left grid grid-cols-1 xl:max-w-[679px] lg:max-w-[500px]">
              <div className="top-seaction">
                <p className="company font-mulish lg:text-[14px] text-[#666668] md:text-[13px] sm:text-[12px] mb:text-[10px]">
                  Knaban Software
                </p>
                <p className="title font-mulish font-extrabold xl:text-[36px] text-[#27272A] mb:mt-[12px] lg:text-[30px] md:text-[24px] mb:text-[20px]">
                  Trello x Webber
                </p>
                <p className="description max-w-[500px] font-mulish xl:text-[16px] text-textColor mb:mt-[12px] lg:text-[14px] md:text-[13px] sm:text-[12px] mb:text-[10px]">
                  Learn how Trello has leveraged Webber to consolidate it’s
                  diverse range of services software
                </p>
                <div className="info flex mt-[32px] justify-between max-w-[490px]">
                  <div className="left">
                    <p className="ind lg:text-[16px] font-mulish md:text-[14px] sm:text-[13px] mb:text-[12px]">
                      Industry: Technology
                    </p>
                    <p className="date lg:text-[16px] font-mulish mt-[24px] md:text-[14px] sm:text-[13px] mb:text-[12px]">
                      Since: 2018
                    </p>
                  </div>
                  <div className="right">
                    <p className="use-case lg:text-[16px] font-mulish md:text-[14px] sm:text-[13px] mb:text-[12px]">
                      Use case: developer options
                    </p>
                    <p className="pkg lg:text-[16px] font-mulish mt-[24px] md:text-[14px] sm:text-[13px] mb:text-[12px]">
                      Packege: Enterprise+
                    </p>
                  </div>
                </div>
              </div>

              <div className="second-top mb:mt-6">
                <p className="title text-textColor xl:text-[28px] font-mulish font-bold lg:text-[25px] md:text-[22px] sm:text-[19px] mb:text-[16px]">
                  The details
                </p>
                <p className="description font-mulish text-textColor xl:text-[16px] xl:mt-[32px] lg:text-[14px] md:mt-[20px] md:text-[13px] sm:text-[12px] mb:text-[11px] mb:mt-[15px]">
                  It is a long established fact that a reader will be distracted
                  by the readable. There are many variations of passages of
                  Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised
                  words which don't look even slightly believable. If you are
                  going to use a passage of Lorem Ipsum, you need to be sure
                  there isn't anything embarrassing hidden in the middle of
                  text. All the Lorem Ipsum generators on the Internet tend to
                  repeat predefined chunks as necessary, making this the first
                  true generator on the Internet. It uses a dictionary of over
                  200 Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                  The generated Lorem Ipsum is therefore always free from
                  repetition, injected humour, or non-characteristic words etc.
                </p>
                <img src="./images/office.png" alt="" className=" mt-[32px]" />
              </div>

              <p className="text text-textColor font-mulish font-semibold lg:mt-[32px] sm:mt-[20px] mb:mt-[15px] xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[14px] mb:text-[13px]">
                Breakdown of milestones
              </p>

              <ul className=" mb:mt-[16px]">
                <li
                  className=" font-mulish
              lg:text-[16px]  text-[#27272A] md:text-[14px] sm:text-[13px] mb:text-[12px]"
                >
                  - Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta, corrupti quae.
                </li>
                <li
                  className=" font-mulish
                lg:text-[16px]  text-[#27272A] md:text-[14px] sm:text-[13px] mb:text-[12px]"
                >
                  - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </li>
                <li
                  className=" font-mulish
                lg:text-[16px] text-[#27272A] md:text-[14px] sm:text-[13px] mb:text-[12px]"
                >
                  - Lorem ipsum dolor sit amet consectetur adipisicing.
                </li>
                <li
                  className=" font-mulish
               
                lg:text-[16px] text-[#27272A] md:text-[14px] sm:text-[13px] mb:text-[12px]"
                >
                  - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li
                  className=" font-mulish
                lg:text-[16px] text-[#27272A] md:text-[14px] sm:text-[13px] mb:text-[12px]"
                >
                  - Lorem ipsum dolor sit amet consectetur.
                </li>
                <li
                  className=" font-mulish
                lg:text-[16px] text-[#27272A] md:text-[14px] sm:text-[13px] mb:text-[12px]"
                >
                  - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li
                  className=" font-mulish
               
                lg:text-[16px] text-[#27272A] md:text-[14px] sm:text-[13px] mb:text-[12px]"
                >
                  - Lorem ipsum dolor sit amet.
                </li>
              </ul>

              <div className="second-img">
                <img src="./images/girl.png" alt="" className="mt-[32px]" />
              </div>

              <p className="description lg:text-[16px] font-mulish text-textColor mb:mt-[32px] md:text-[14px] sm:text-[13px] mb:text-[12px]">
                It is a long established fact that a reader will be distracted
                by the readable. There are many variations of passages of Lorem
                Ipsum available, but the majority have suffered alteration in
                some form, by injected humour, or randomised words which don't
                look even slightly believable. If you are going to use a passage
                of Lorem Ipsum, you need to be sure there isn't anything
                embarrassing hidden in the middle of text. All the Lorem Ipsum
                generators on the Internet tend to repeat predefined chunks as
                necessary, making this the first true generator on the Internet.
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures, to generate Lorem Ipsum
                which looks reasonable. The generated Lorem Ipsum is therefore
                always free from repetition, injected humour, or
                non-characteristic words etc.
              </p>
            </div>
            <div className="right grid grid-cols-1 lg:mt-[-80px] mb:mt-12">
              <div className="flex flex-col">
                <div className="upper">
                  <img src="./images/right.png" alt="" />
                </div>

                <div className="right-blue max-w-[485px] mt-[52px] px-8 py-10">
                  <p className="title text-[#ffffff] xl:text-[24px] font-mulish font-bold lg:text-[22px] md:text-[20px] sm:text-[18px] mb:text-[16px]">
                    Get Webber for your organization
                  </p>
                  <p className="desc font-mulish xl:text-[16px] text-[#ffffff] lg:mt-[32px] md:mt-[25px] sm:mt-[20px] mb:mt-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] mb:text-[11px]">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look.
                  </p>

                  <div className="buttons flex mt-[32px]">
                    <button className="left font-mulish font-medium xl:text-[16px] text-[#0E7490] xl:px-8 xl:py-4 bg-[#ffffff] lg:text-[14px] lg:px-7 lg:py-3.5 md:text-[13px] md:px-6 md:py-3 sm:text-[12px] sm:px-5.5 sm:py-2.75 mb:text-[10px] mb:px-5 mb:py-2.5">
                      Start trial
                    </button>
                    <button className="right xl:text-[16px] ml-[16px] text-[#ffffff] border-white border xl:px-8 xl:py-4 lg:text-[14px] lg:px-7 lg:py-3.5 md:text-[13px] md:px-6 md:py-3 sm:text-[12px] sm:px-5.5 sm:py-2.75 mb:text-[10px] mb:px-5 mb:py-2.5">
                      Contact sales
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer bg-[#F4F4F5] mt-[60px] xl:pt-[60px] lg:pt-[50px] md:pt-[40px] sm:pt-[30px] mb:pt-[20px] border border-[#E4E4E7] mx-auto">
            <div className="title max-w-[1440px] mx-auto">
              <p className="title font-mulish text-textColor text-[28px] font-bold ml-[80px]">
                More case studies
              </p>
            </div>
            <div className="grid md:grid-cols-4 max-w-[1280px] mx-auto md:gap-x-[25px] md:mt-[47px] md:mb-[84px] lg:gap-x-[40px] mb:px-4 sm:grid-cols-2 sm:gap-x-[30px] sm:mt-[20px] mb:mb-8 mb:grid-cols-1">
              {FooterItems.map((item) => {
                return (
                  <>
                    <div className="each-item xl:max-w-[256px] lg:max-w-[230px]">
                      <img src={item.image} alt="" />
                      <p className="company font-mulish lg:test-[14px] text-[#52525B] font-medium mb:mt-[24px] md:text-[12px] mb:text-[10px]">
                        {item.company}
                      </p>
                      <p className="title font-mulish text-[#27272A] xl:text-[26px] font-bold mb:mt-[12px] lg:text-[22px] md:text-[18px] sm:text-[14px] mb:text-[12px]">
                        {item.title}
                      </p>
                      <p className="description font-mulish lg:text-[14px] mb:mt-[8px] text-[#27272A] md:text-[12px] sm:text-[10px] mb:text-[10px]">
                        {item.description}
                      </p>
                      <p className=" flex read font-mulish lg:text-[16px] text-[#0E7490] mt-[15px] underline underline-offset-4 mb-16 md:text-[12px] mb:text-[10px]">
                        {item.readStory}{" "}
                        <span className="mt-1">
                          <ReadArrow />
                        </span>
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseInner;
