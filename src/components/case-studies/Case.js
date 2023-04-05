import React from "react";
import { useState } from "react";
import { caseItems } from "../../utils/Data";
import { ReadArrow } from "../../utils/Logos";
import { Link } from "react-router-dom";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import {
  DropdownTitle1,
  DropdownTitle2,
  DropdownTitle3,
} from "../../utils/Data";
import Dropdown from "../Dropdown";

const Case = () => {
  return (
    <>
      <div className="case xl:mt-[139px] lg:mt-[125px] md:mt-[110px] sm:mt-[95px] mb:mt-[70px]">
        <div className="text-area">
          <p className="title font-mulish text-textColor font-black xl:text-[96px] text-center lg:text-[75px] md:text-[55px] sm:text-[40px] mb:text-[35px] ">
            CASE STUDIES
          </p>
          <p className="description text-[#52525B] font-mulish xl:text-[20px] text-center xl:max-w-[800px] lg:max-w-[700px] md:max-w-[550px] md:text-[16px] sm:max-w-[450px] mb:max-w-[340px]  mx-auto mt-[13px] sm:text-[13px] md:twxt-[14px] lg:text-[18px] mb:text-[12px]">
            See how leading organizations and freelance developers have used
            Webber to tackle different use cases and get ahead of the
            competition
          </p>
        </div>

        <div className="dropdowns mb:max-w-[375px] mb:mx-12 sm:max-w-[410px] sm:mx-auto xl:mt-[52px] lg:mt-[45px] md:mt-[40px] sm:mt-[35px] mb:mt-[30px] mb:border border-[#D4D4D8] mb:px-[30px] mb:py-[24px] rounded-sm ">
          <div className="dropdown-main flex justify-between">
            <div className="col1">
              {DropdownTitle1.map((item) => {
                return (
                  <>
                    <div className="item-top flex justify-between">
                      <Dropdown item={item} />
                    </div>
                  </>
                );
              })}
            </div>

            <div className="col2">
              {DropdownTitle2.map((item) => {
                return (
                  <>
                    <div className="top flex">
                      <Dropdown item={item} />
                    </div>
                  </>
                );
              })}
            </div>

            <div className="col3">
              {DropdownTitle3.map((item) => {
                return (
                  <>
                    <div className="top flex ">
                      <Dropdown item={item} />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:mt-[119px] max-w-[1280px] mx-auto xl:gap-x-[87px] xl:px-[179px] lg:mt-[100px] lg:px-[120px] lg:gap-x-[78px] md:mt-[80px] md:px-[100px] md:gap-x-[50px] mb:grid-cols-1 mb:mt-[50px] mb:px-8 ">
          {caseItems.map((items, index) => {
            return (
              <>
                <div
                  className={`column ${
                    (index === 0 || index === 2 || index === 4) &&
                    "lg:mt-[105px] md:mt-[60px]"
                  } ${
                    (index === 1 || index === 3 || index === 5) && ""
                  } mb:mb-8`}
                >
                  <img src={items.image} alt="" />
                  <p className="company sm::text-[14px] sm:mt-[24px] font-mulish font-medium text-[#52525B]">
                    {items.company}
                  </p>
                  <p className="title font-mulish font-extrabold xl:text-[28px] xl:mt-[12px] text-[#27272A] lg:text-[24px] lg:mt-[10px] md:text-[18px] sm:text-[16px] sm:mt-[8px] mb:text-[14px] mb:mt-[7px] ">
                    {items.title}
                  </p>
                  <p className="description text-[#52525B] xl:mt-[8px] xl:text-[16px] lg:text-[14px] lg:mt-[7px] md:mt-[6px] md:text-[12px] sm:mt-[5px] sm:text-[11px] mb:mt-[5px] mb:text-[10px]">
                    {items.description}{" "}
                  </p>

                  <Link
                    to="/read"
                    className=" flex text-[#0E7490] items-center xl:mt-[14px] xl:text-[14px] lg:text-[12px] lg:mt-[12px] md:text-[10px] md:mt-[10px] sm:text-[9px] sm:mt-[9px] mb:text-[8px] mb:mt-[8px] mb:underline mb:underline-offset-4"
                  >
                    {items.readStory}{" "}
                    <span className=" mt-1">
                      <ReadArrow />
                    </span>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Case;
