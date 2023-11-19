import React from "react";

const BadgeTech = ({ sub }) => {
  return (
    <button className="py-4 px-4 mt-2 mr-2 bg-brown/20 hover:-translate-y-1  rounded-full">
      <img src={sub.item} className="w-8" alt="" />
    </button>
  );
};

export default BadgeTech;
