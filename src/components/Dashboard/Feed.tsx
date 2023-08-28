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
              <div>{productRequest.upvotes}</div>
            </button>
            <div className="w-full">
              <div className="pb-[4px]">{productRequest.title}</div>
              <div className="pb-[12px]">{productRequest.description}</div>
              <span className="bg-[#F2F4FF] px-[16px] py-[5px] rounded-[10px]">
                {productRequest.category}
              </span>
            </div>
            <div className="flex gap-[8px]">
              <img src={comment.src} alt="comment" />
              <div>{productRequest.comments.length}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Feed;
