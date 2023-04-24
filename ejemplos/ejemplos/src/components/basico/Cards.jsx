import React from "react";

const Cards = (props) => {
  return (
    <div className="  rounded overflow-hidden shadow-lg">
      <img src={props.photo} className="w-full" alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
          magni explicabo dolor eligendi atque veritatis quam at laboriosam
          molestias!
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium ">
          Photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium ">
          Travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium ">
          Winter
        </span>
      </div>
    </div>
  );
};

export default Cards;
