import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Alienco-new.png";
import "./Navbar.css";

const Navbar = () => {
  const [ToggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="bg-gray-100 w-screen h-auto">
      <div className=" w-screen flex flex-wrap align-middle justify-between xl:px-20 px-10 py-6 ">
        <div className="logo">
          <img src={logo} alt="" width="150" />
        </div>
        <div className="flex md:hidden mt-2">
          <button
            onClick={() => setToggleMenu((prev) => !prev)}
            className={[
              "toggle z-50 ",
              ToggleMenu ? "navbar__link--active" : "",
            ].join(" ")}
          ></button>
        </div>
        <ul
          // className={[
          //   "hidden md:flex align-middle justify-center gap-10 text-base",
          //   ToggleMenu ? "opacity-100 visible z-20" : "opacity-0 invisible",
          // ].join(" ")}
          className={[
            "transition-all flex gap-10 duration-200 items-center fixed inset-0 bg-gray-100 pt-24 md:pt-0 md:bg-transparent md:relative md:flex md:opacity-100 md:visible my-2",
            ToggleMenu
              ? "opacity-100 visible z-20 flex-col"
              : "opacity-0 invisible",
          ].join(" ")}
        >
          <li
            className={[
              "cursor-pointer hover:text-blue-400 transition-all duration-100",
            ].join(" ")}
          >
            <NavLink exact activeClassName="navbar__link--active" to="/">
              Home
            </NavLink>
          </li>
          <li
            className={[
              "cursor-pointer hover:text-blue-400 transition-all duration-100",
            ].join(" ")}
          >
            <NavLink exact activeClassName="navbar__link--active" to="/wedding">
              WEDDING
            </NavLink>
          </li>
          <li
            className={[
              "cursor-pointer hover:text-blue-400 transition-all duration-100",
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
              "cursor-pointer hover:text-blue-400 transition-all duration-100",
            ].join(" ")}
          >
            <NavLink exact activeClassName="navbar__link--active" to="/blog">
              BLOG
            </NavLink>
          </li>
          <li
            className={[
              "cursor-pointer hover:text-blue-400 transition-all duration-100",
            ].join(" ")}
          >
            <NavLink exact activeClassName="navbar__link--active" to="/videos">
              VIDEOS
            </NavLink>
          </li>
          <li
            className={[
              "cursor-pointer hover:text-blue-400 transition-all duration-100",
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
              "cursor-pointer hover:text-blue-400 transition-all duration-100",
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
