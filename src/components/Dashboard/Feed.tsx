import React, { useState } from "react";
import comment from "../../assets/shared/icon-comments.svg";
import upvote from "../../assets/shared/icon-arrow-up.svg";

interface ProductRequestData {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments: Object[];
}

interface ProductRequests {
  productRequests: ProductRequestData[];
}

function Feed(props: ProductRequests) {
  const { productRequests } = props;

  // Use useState to manage the state of productRequests
  const [updatedProductRequests, setUpdatedProductRequests] =
    useState(productRequests);

  const handleUpvote = (index: number) => {
    // Create a copy of the productRequests array
    const updatedRequests = [...updatedProductRequests];

    // Update the upvotes value in the copied array
    updatedRequests[index].upvotes += 1;

    // Set the state with the updated array
    setUpdatedProductRequests(updatedRequests);
  };

  return (
    <>
      {updatedProductRequests.map((productRequest, index) => (
        <div className="px-[32px] py-[28px]" key={productRequest.id}>
          <div className="flex w-full justify-between items-center gap-[40px]">
            <button
              onClick={() => handleUpvote(index)}
              className="bg-[#F2F4FF] hover:bg-[#CFD7FF] rounded-[10px] flex flex-col items-center justify-center gap-[8px] w-[40px] h-[53px]"
            >
              <img src={upvote.src} alt="upvote" />
              <div className="typo_body3 !font-[700]">
                {productRequest.upvotes}
              </div>
            </button>
            <div className="w-full">
              <div className="pb-[4px] typo_h3">{productRequest.title}</div>
              <div className="pb-[12px] typo_body1">
                {productRequest.description}
              </div>
              <span className="bg-[#F2F4FF] px-[16px] py-[5px] typo_body3 rounded-[10px] !text-[#4661E6]">
                {productRequest.category}
              </span>
            </div>
            <div className="flex gap-[8px] items-center justify-center">
              <img src={comment.src} alt="comment" />
              <div className="typo_body1 !font-[700] w-[18px] h-[16px]">
                {productRequest.comments.length}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Feed;
