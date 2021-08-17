import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Alienco-new.png";
import "./Navbar.css";

const Navbar = () => {
  const [ToggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="bg-gray-100 w-screen">
      <div className=" w-screen flex flex-wrap align-middle justify-between xl:px-20 px-10 py-6 top-0 ">
        <div className="logo">
          <img src={logo} alt="" width="150" />
        </div>
        <div className="flex md:hidden mt-2">
          {/* <button
            onClick={() => setToggleMenu((prev) => !prev)}
            className={[
              "toggle z-50 ",
              ToggleMenu ? "navbar__link--active" : "",
            ].join(" ")}
          ></button> */}
          <i
            className={[
              "fas fa-bars menuNav z-50 text-2xl",
              ToggleMenu ? "navbar__link--active fixed mr-5" : "",
            ].join(" ")}
            style={ToggleMenu ? { right: "20px" } : {}}
            onClick={() => setToggleMenu((prev) => !prev)}
          ></i>
        </div>
        <ul
          // className={[
          //   "hidden md:flex align-middle justify-center gap-10 text-base",
          //   ToggleMenu ? "opacity-100 visible z-20" : "opacity-0 invisible",
          // ].join(" ")}
          className={[
            "transition-all flex gap-0 md:gap-10 duration-500 items-center fixed inset-0 bg-gray-100 pt-20 md:pt-0 md:bg-transparent md:relative md:flex md:opacity-100 md:visible py-2 mt-0 md:mt-5",
            ToggleMenu
              ? "opacity-100 visible z-20 flex-col "
              : "opacity-0 invisible h-0",
          ].join(" ")}
          style={ToggleMenu ? { height: "490px" } : {}}
        >
          <li
            className={[
              "cursor-pointer hover:text-blue-400 transition-all duration-100 md:duration-500",
              ToggleMenu ? "w-full p-4 border-b-2 border-t-2" : "",
            ].join(" ")}
          >
            <NavLink exact activeClassName="navbar__link--active" to="/">
              Home
            </NavLink>
          </li>
          <li
            className={[
              "cursor-pointer hover:text-blue-400 transition-all duration-100 md:duration-500",
              ToggleMenu ? "w-full p-4 border-b-2 border-t-2" : "",
            ].join(" ")}
          >
            <NavLink exact activeClassName="navbar__link--active" to="/wedding">
              WEDDING
            </NavLink>
          </li>
          <li
            className={[
              "cursor-pointer hover:text-blue-400 transition-all duration-100 md:duration-500",
              ToggleMenu ? "w-full p-4 border-b-2 border-t-2" : "",
            ].join(" ")}
          >
            <NavLink
              exact
              activeClassName="navbar__link--active"
              to="/prewedding"
            >
              PREWEDDING
            </NavLink>
          </li>
          <li
            className={[
              "cursor-pointer hover:text-blue-400 transition-all duration-100 md:duration-500",
              ToggleMenu ? "w-full p-4 border-b-2 border-t-2" : "",
            ].join(" ")}
          >
            <NavLink exact activeClassName="navbar__link--active" to="/blog">
              BLOG
            </NavLink>
          </li>
          <li
            className={[
              "cursor-pointer hover:text-blue-400 transition-all duration-100 md:duration-500",
              ToggleMenu ? "w-full p-4 border-b-2 border-t-2" : "",
            ].join(" ")}
          >
            <NavLink exact activeClassName="navbar__link--active" to="/videos">
              VIDEOS
            </NavLink>
          </li>
          <li
            className={[
              "cursor-pointer hover:text-blue-400 transition-all duration-100 md:duration-500",
              ToggleMenu ? "w-full p-4 border-b-2 border-t-2" : "",
            ].join(" ")}
          >
            <NavLink
              exact
              activeClassName="navbar__link--active"
              to="pricelist"
            >
              PRICELIST
            </NavLink>
          </li>
          <li
            className={[
              "cursor-pointer hover:text-blue-400 transition-all duration-100 md:duration-500",
              ToggleMenu ? "w-full p-4 border-b-2 border-t-2" : "",
            ].join(" ")}
          >
            <NavLink
              exact
              activeClassName="navbar__link--active"
              to="contact-us"
            >
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
