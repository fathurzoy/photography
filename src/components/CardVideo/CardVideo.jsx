import React from "react";

const CardVideo = ({ img, title, link }) => {
  return (
    <div>
      <div className="flex flex-col w-full md:w1/3 p-2 h-12 relative cursor-pointer">
        <img src={img} alt="" width="250" className=" bg-cover object-cover" />
        <p className="mt-2 text-center">{title}</p>
      </div>
    </div>
  );
};

export default CardVideo;
