import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";
import { Send, TwitterLogo, Webber, YoutubeLogo } from "../../utils/Logos";

const Footer = () => {
  return (
    <>
      <div className="footer bg-[#F4F4F5] pt-[81px]  md:w-full md:px-6 md:pt-[50px] xl:pt-[81px]">
        <div className="grid grid-cols-2 gap-[30px] mx-auto max-w-[1180px] sm:grid-cols-1 md:grid-cols-2 mb:grid-cols-1">
          <div className="left-portion  flex justify-between mb:px-4">
            <div className="left">
              <Webber />
              <p className="text1 font-mulish text-[#52525B] text-[14px] mt-[32.2px]">
                Copyright © 2021 WEBBER.
              </p>
              <p className="text2 font-mulish text-[#52525B] text-[14px] mt-[8px]">
                All rights reserved
              </p>

              <div className="logo-area flex gap-[32px] mt-[41.6px] md:mt-[30px]">
                <Link>
                  <TwitterLogo />
                </Link>
                <Link>
                  <YoutubeLogo />
                </Link>
              </div>
            </div>
            <div className="right font-mulish text-[#27272A] ">
              <p className="title font-medium lg:text-[20px]  md:text-[16px] sm:text-[14] mb:text-[12px]">
                Company
              </p>
              <ul className=" mt-[24px]">
                <Link>
                  <li className=" mb-[12px] sm:text-[12px] md:text-[14px] xl:text-[16px] mb:text-[10px]">
                    About us
                  </li>
                </Link>
                <Link>
                  <li className=" mb-[12px] sm:text-[12px] md:text-[14px] xl:text-[16px] mb:text-[10px]">
                    Blog
                  </li>
                </Link>
                <Link>
                  <li className=" mb-[12px] sm:text-[12px] md:text-[14px] xl:text-[16px] mb:text-[10px]">
                    Contact us
                  </li>
                </Link>
                <Link>
                  <li className=" mb-[12px] sm:text-[12px] md:text-[14px] xl:text-[16px] mb:text-[10px]">
                    Pricing
                  </li>
                </Link>
                <Link>
                  <li className=" mb-[12px] sm:text-[12px] md:text-[14px] xl:text-[16px] mb:text-[10px]">
                    Testimonials
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="right-portion  flex gap-[60px] p-0 sm:justify-between sm:px-4 md:gap-[30px] mb:px-4 mb:justify-between">
            <div className="left font-mulish text-[#27272A]">
              <p className="title font-medium lg:text-[16px] xl:text-[20px]  sm:text-[14px] mb:text-[12px]">
                Support
              </p>
              <ul className=" mt-[24px]">
                <Link><li className=" mb-[12px] sm:text-[12px] md:text-[14px] xl:text-[16px] mb:text-[10px]">
                  Help center
                </li></Link>
                <Link><li className=" mb-[12px] sm:text-[12px] md:text-[14px] xl:text-[16px] mb:text-[10px]">
                  Terms of services
                </li></Link>
                <Link><li className=" mb-[12px] sm:text-[12px] md:text-[14px] xl:text-[16px] mb:text-[10px]">
                  Legal
                </li></Link>
                <Link><li className=" mb-[12px] sm:text-[12px] md:text-[14px] xl:text-[16px] mb:text-[10px]">
                  Privacy Policy
                </li></Link>
                <Link><li className=" mb-[12px] sm:text-[12px] md:text-[14px] xl:text-[16px] mb:text-[10px]">
                  Status
                </li></Link>
              </ul>
            </div>
            <div className="right">
              <p className="title font-medium xl:text-[20px] sm:text-[14px]  mb:text-[12px]">
                Get Updates and more
              </p>

              <div className="input-area flex mt-[24px]">
                <input
                  type="text"
                  placeholder="Your email address"
                  className=" max-w-[213px] md:max-w-[140px] xl:max-w-[213px] xl:w-full mb:text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] mb:p-2"
                />
                <div className="send py-[8.33px] px-[9.03px]">
                  <Send />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
