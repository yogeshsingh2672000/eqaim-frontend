"use client";
import React, { useState } from "react";
import suggestionIcon from "../../assets/suggestions/icon-suggestions.svg";

function Panel() {
  const [setselected, setSetselected] = useState<null | string>("Most Upvotes");
  const [optionStatus, setOptionStatus] = useState(false);

  const handleOptionClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const selectedOption = e.currentTarget.textContent;
    setSetselected(selectedOption);
    setOptionStatus(false);
  };
  return (
    <>
      {/* panel */}
      <div className="bg-[#373F68] p-[24px] rounded-[10px] flex items-center justify-between">
        <div className="flex gap-[38px]">
          <div className="flex gap-[16px]">
            <img src={suggestionIcon.src} alt="icon-suggestions" />
            <div className="typo_h3 !text-white">6 suggestions </div>
          </div>
          <div className="relative">
            <button
              className="typo_h4 !text-white !font-[400]"
              onClick={() => setOptionStatus(!optionStatus)}
            >
              Sort by: <span className="!font-[700]">{setselected}</span>{" "}
              {optionStatus ? "^" : ""}
            </button>
            {optionStatus && (
              <div className="sort_style absolute bg-white rounded-[10px] divide-[#3A4374] divide-y w-[255px] h-[192px] mt-[42px]">
                <div
                  onClick={handleOptionClick}
                  className="px-[24px] py-[12px] cursor-pointer"
                >
                  Most Upvotes
                </div>
                <div
                  onClick={handleOptionClick}
                  className="px-[24px] py-[12px] cursor-pointer"
                >
                  Least Upvotes
                </div>
                <div
                  onClick={handleOptionClick}
                  className="px-[24px] py-[12px] cursor-pointer"
                >
                  Most Comments
                </div>
                <div
                  onClick={handleOptionClick}
                  className="px-[24px] py-[12px] cursor-pointer"
                >
                  Least Comments
                </div>
              </div>
            )}
          </div>
        </div>
        <button className="bg-[#AD1FEA] px-[24px] py-[12px] rounded-[10px] typo_h4 !text-white hover:bg-[#C75AF6]">
          +Add Feedback
        </button>
      </div>
    </>
  );
}

export default Panel;
