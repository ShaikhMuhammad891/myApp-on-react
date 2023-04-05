import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

const Dropdown = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="item1">
        <button
          className="title text-[#52525B] font-mulish sm:text-[16px] font-medium hover:font-bold mb:text-[12px]"
          onClick={() => setIsOpen(() => !isOpen)}
        >
          {item.title}
        </button>
      </div>

      {!isOpen && (
        <select name="selection" id="select" className=" max-w-[50px]">
          <option value="optionOne">{item.option1}</option>
          <option value="optionTwo">{item.option2}</option>
          <option value="optionThree">{item.option3}</option>
        </select>
      )}
      {/* <div className="arrows ml-3 mt-[]">
        {isOpen ? (
          <RxCaretUp onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <RxCaretDown onClick={() => setIsOpen(!isOpen)} />
        )}
      </div> */}
    </>
  );
};

export default Dropdown;
