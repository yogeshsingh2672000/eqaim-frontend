import React from "react";

interface StringArray {
  status: string[]; // Array of strings
}

function Roadmap(props: StringArray) {
  const { status } = props;
  return (
    status && (
      <div className="p-[24px] bg-white rounded-[10px]">
        <div className="gap-[8px]">
          <div></div>
          {status.map((stat: string) => (
            <div key={stat}>{stat}</div>
          ))}
        </div>
      </div>
    )
  );
}

export default Roadmap;
