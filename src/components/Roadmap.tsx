"use client";
import React, { useState } from "react";

interface StringArray {
  status: string[]; // Array of strings
}

function Roadmap(props: StringArray) {
  const [expandToggle, setExpandToggle] = useState(false);
  const { status } = props;
  return (
    status && (
      <div className="p-[24px] bg-white rounded-[10px]">
        <div className="gap-[8px]">
          <div
            className={`flex justify-between ${expandToggle && "pb-[24px]"}`}
          >
            <div className="typo_h3">Roadmap</div>
            <div
              onClick={() => setExpandToggle(!expandToggle)}
              className="underline cursor-pointer text-[#4661E6]"
            >
              view
            </div>
          </div>
          {expandToggle && (
            <ul className="list-disc px-[15px]">
              {status.map((stat: string) => (
                <li key={stat}>{stat}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  );
}

export default Roadmap;
