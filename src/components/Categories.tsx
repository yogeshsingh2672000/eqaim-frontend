import React from "react";

interface StringArray {
  categories: string[]; // Array of strings
}

function Categories(props: StringArray) {
  const { categories } = props;
  return (
    categories && (
      <div className="p-[24px] bg-white rounded-[10px]">
        <div className="flex flex-wrap gap-[8px] ">
          <button className="bg-[#F2F4FF] typo_body3 hover:bg-[#CFD7FF] px-[16px] py-[5px] rounded-[10px] active:bg-[#4661E6]">
            All
          </button>
          {categories.map((cat: string) => (
            <button
              className="bg-[#F2F4FF] typo_body3 hover:bg-[#CFD7FF] px-[16px] py-[5px] rounded-[10px] active:bg-[#4661E6]"
              key={cat}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    )
  );
}

export default Categories;
