import React from "react";

const CardBlog = ({ img, title, desc }) => {
  return (
    <div>
      <div className="flex flex-col w-full p-2 h-auto  relative text-left">
        <img
          src={img}
          alt=""
          className=" bg-cover object-cover cursor-pointer"
        />
        <p className="mt-2 font-semibold text-base cursor-pointer hover:underline ">
          {title}
        </p>
        <p className="mt-2 font-normal text-sm">{desc}</p>
        <a
          href="#"
          className="font-bold text-blue-700 hover:text-blue-800 hover:underline mt-2 cursor-pointer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default CardBlog;
