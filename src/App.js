import React from "react";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import { Routes, Route } from "react-router-dom";
import Index from "./components/landing";
import Pricing from "./components/pricing/Pricing";
import Case from "./components/case-studies/Case";
import CaseInner from "./components/case-studies/CaseInner";
import Question from "./components/pricing/Question";
const App = () => {
  return (
    <>
    <div className="container]"></div>
      <Header />

      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="case" element={<Case />} />
        <Route path="read" element={<CaseInner />} />
        <Route path = "queries" element = {<Question/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
