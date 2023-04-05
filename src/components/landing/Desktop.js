import React from "react";
import "../css/desktop.css";
import { DesktopImage } from "../../utils/Logos";
const Desktop = () => {
  return (
    <>
      <div className="desktop">
        <div className="inner-side mx-auto px-4 md:px-8 xl:px-[80px]">
          <div className="blue-area mx-auto h-[28vh] bg-primary mt-[120px] max-w-[1280px] flex justify-center mb:max-w-[550px] mb:mx-auto mb:h-[130px] mb:mb-0 sm:max-w-[690px] md:max-w-[900px] lg:max-w-[1000px] xl:max-w-[1280px] md:h-[200px] lg:h-[210px] xl:h-[230px]"></div>
          <div className="mac mb:mt-[-75px] mb:p-0 lg:mt-[-100px] xl:mt-[-115px]">
            <DesktopImage className=" w-[300px] mx-auto mb:h-[240px] sm:w-[500px] sm:h-[300px] md:w-[700px] md:h-[400px] lg:w-[850px] lg:h-[450px] xl:w-[947px] xl:h-[600px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktop;
