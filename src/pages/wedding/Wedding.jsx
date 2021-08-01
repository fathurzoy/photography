import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import React from "react";

const Wedding = () => {
  return (
    <div>
      <Navbar />
      <div className="wedding container mx-auto mb-10 mt-16">
        <div className="header">
          <p className="text-orange-500 font-medium">ANDI PHOTOGRAPHY</p>
          <h1 className="text-3xl sm:text-5xl font-semibold">
            Wedding Gallery
          </h1>
          <div className="line bg-orange-500 w-20 h-1 mt-3"></div>
          <h2 className="font-medium text-lg md:text-2xl text-gray-600 mt-8">
            It feels good when you can put a smile on someone’s face by simply
            being yourself
          </h2>
        </div>
        <div className="content mt-8">
          <div className="top flex justify-center mt-10">
            <div className="w-1/2 p-1">
              <img
                loading="lazy"
                src="assets/images/weddinggallery1.jpg"
                alt=""
              />
            </div>
            <div className="w-1/2 p-1">
              <img
                loading="lazy"
                src="assets/images/weddinggallery2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="top flex flex-wrap justify-center">
            <div className="w-1/2 p-1">
              <img
                loading="lazy"
                src="assets/images/weddinggallery3.jpg"
                alt=""
              />
            </div>
            <div className="w-1/2 flex">
              <div className="w-1/2 p-1">
                <img
                  loading="lazy"
                  src="assets/images/weddinggallery4.jpg"
                  alt=""
                />
              </div>
              <div className="w-1/2 p-1">
                <img
                  loading="lazy"
                  src="assets/images/weddinggallery5.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="top flex flex-wrap justify-center">
            <div className="w-1/2 flex">
              <div className="w-1/2 p-1">
                <img
                  loading="lazy"
                  src="assets/images/weddinggallery6.jpg"
                  alt=""
                />
              </div>
              <div className="w-1/2 p-1">
                <img
                  loading="lazy"
                  src="assets/images/weddinggallery7.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 p-1">
              <img
                loading="lazy"
                src="assets/images/weddinggallery8.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="top flex flex-wrap justify-center">
            <div className="w-1/2 ">
              <div className="flex flex-col p-1">
                <img
                  loading="lazy"
                  src="assets/images/weddinggallery9.jpg"
                  alt=""
                />
              </div>
              <div className="flex">
                <div className="w-1/2 p-1">
                  <img
                    loading="lazy"
                    src="assets/images/weddinggallery10.jpg"
                    alt=""
                  />
                </div>
                <div className="w-1/2 p-1">
                  <img
                    loading="lazy"
                    src="assets/images/weddinggallery11.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-1/2 p-1">
              <img
                loading="lazy"
                src="assets/images/weddinggallery12.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="top flex flex-wrap justify-center">
            <div className="w-1/2 p-1">
              <img
                loading="lazy"
                src="assets/images/weddinggallery13.jpg"
                alt=""
              />
            </div>
            <div className="w-1/2 flex">
              <div className="w-1/2 p-1">
                <img
                  loading="lazy"
                  src="assets/images/weddinggallery14.jpg"
                  alt=""
                />
              </div>
              <div className="w-1/2 p-1">
                <img
                  loading="lazy"
                  src="assets/images/weddinggallery15.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wedding;
