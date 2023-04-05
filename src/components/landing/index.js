import React from "react";
import Front from "./Front";
import Desktop from "./Desktop";
import Features from "./Features";
import Mobile from "./Mobile";
import Brands from "./Brands";
import Numbers from "./Numbers";

const index = () => {
  return (
    <>
      <div className="container mx-auto">
        <Front />
        <Desktop />
        <Features />
        <Mobile />
        <Brands />
        <Numbers />
      </div>
    </>
  );
};

export default index;
