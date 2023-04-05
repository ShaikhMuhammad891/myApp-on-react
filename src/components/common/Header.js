import React from "react";
import "./css/header.css";
import { WebLogo } from "../../utils/Logos";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="nav-bar">
        <div className="header-top  max-w-[1440px] mx-auto ">
          <div className="header max-w-[1280px] flex justify-between w-full mx-auto mt-0 sm:w-[600px] md:max-w-[1024px] md:w-full xl:max-w-[1280px] sm:px-4 md:px-6 xl:px-12 mb:px-4 mb:max-w-[639px]">
            <div className="left max-w-[73.3px] text-center mt-[30px]">
              <div className="logo">
                <Link to="/">
                  <WebLogo />
                </Link>
              </div>
              <p className="text text-[14px] font-black sm:text-[10px] xl:text-[14px]">
                WEBBER
              </p>
            </div>

            <div className="center mb:hidden sm:block">
              <ul className=" flex gap-[30px]  mt-[45px] h-[16px] font-mulish lg:text-[16px] md:text-[14px] sm:text-[12px] ">
                <li>
                  <NavLink to="/" >Overview</NavLink>
                </li>

                <li>
                  <NavLink to="/pricing" >Pricing</NavLink>
                </li>

                <li>
                  <NavLink to="/case" >Case studies</NavLink>
                </li>

                <li>
                  <NavLink to="/queries" >FAQ</NavLink>
                </li>
              </ul>
            </div>
            <div className="right mt-[33px] max-w-[84px]">
              <button className=" bg-secondary text-primary max-w-[84px] lg:py-[12px] lg:px-[20px] font-mulish lg:text-[14px] font-normal mb:hidden sm:block sm:text-[12px] sm:px-[16px] sm:py-[9px]">
                Sign in
              </button>
            </div>
            {open ? (
              <div className="close-icon float-right mt-[40px] pr-4 sm:hidden text-3xl fixed right-0 mr-12">
                <AiOutlineClose onClick={() => setOpen(!open)} />
              </div>
            ) : (
              <div className="menu-icon mt-[40px] pr-4 sm:hidden right-0 float-right">
                <AiOutlineMenu
                  className=" text-3xl"
                  onClick={() => setOpen(!open)}
                />
              </div>
            )}
          </div>

          {/* menu for small devices */}
          <div
            className={` duration-500 center sm:hidden max-w-[639px] h-[55vh] fixed bg-primary w-full ${
              open ? "left-0" : "left-[-100%]"
            }`}
          >
            <ul className=" text-[16px] font-mulish mt-0">
              <li className=" p-4 text-[white]">
                <Link to="/">Overview</Link>
              </li>

              <li className=" p-4 text-[white]">
                <Link to="/pricing">Pricing</Link>
              </li>

              <li className=" p-4 text-[white]">
                <Link to="/case">Case Studies</Link>
              </li>

              <li className=" p-4 text-[white]">
                <Link to="/queries">FAQ</Link>
              </li>
              <li className=" p-4">
                <button className=" bg-secondary text-primary max-w-[84px] py-[10px] px-[16px] font-mulish text-[14px] font-normal sm:hidden">
                  Sign in
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
