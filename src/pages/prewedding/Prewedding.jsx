import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import React from "react";

const Prewedding = () => {
  return (
    <div>
      <Navbar />
      <div className="prewedding container mx-auto mb-10 mt-16">
        <div className="header flex flex-col justify-center">
          <p className="font-medium text-2xl">
            <span className="text-orange-500 ">[</span> ANDI PHOTOGRAPHY{" "}
            <span className="text-orange-500 ">]</span>
          </p>
          <h1 className="text-3xl sm:text-5xl font-semibold text-gray-700">
            Prewedding Gallery
          </h1>
          <div className="line bg-orange-500 w-20 h-1 mt-5 self-center "></div>
          <h2 className="font-medium text-lg md:text-2xl text-gray-600 mt-8">
            It feels good when you can put a smile on someone’s face by simply
            being yourself
          </h2>
        </div>
        <div className="content mt-8">
          <div className="flex flex-wrap">
            <div className="flex flex-col w-1/2 md:w-1/4">
              <img src="assets/images/prewedding1.jpg" alt="" className="p-2" />
              <img src="assets/images/prewedding2.jpg" alt="" className="p-2" />
            </div>
            <div className="flex flex-col w-1/2 md:w-1/4">
              <img src="assets/images/prewedding3.jpg" alt="" className="p-2" />
              <img src="assets/images/prewedding4.jpg" alt="" className="p-2" />
            </div>
            <div className="flex flex-col w-1/2 md:w-1/4">
              <img src="assets/images/prewedding5.jpg" alt="" className="p-2" />
              <img src="assets/images/prewedding6.jpg" alt="" className="p-2" />
            </div>
            <div className="flex flex-col w-1/2 md:w-1/4">
              <img src="assets/images/prewedding7.jpg" alt="" className="p-2" />
              <img src="assets/images/prewedding8.jpg" alt="" className="p-2" />
              <img src="assets/images/prewedding9.jpg" alt="" className="p-2" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Prewedding;
