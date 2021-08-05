import React from "react";
import { ReactComponent as IconPlay } from "../../assets/images/icon-play.svg";

const CardVideo = ({ img, title, link }) => {
  return (
    <div>
      <div className="flex flex-col w-full md:w1/3 p-2 h-auto relative cursor-pointer">
        <img src={img} alt="" width="250" className=" bg-cover object-cover" />
        <div
          className="w-full h-full opacity-0 absolute inset-x-0 hover:opacity-75 transition-all duration-200"
          style={{ top: "65px" }}
        >
          <IconPlay></IconPlay>
        </div>
        <p className="mt-2 text-center">{title}</p>
      </div>
    </div>
  );
};

export default CardVideo;
