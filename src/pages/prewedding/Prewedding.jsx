import { BackTop, Image } from "antd";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import React from "react";
import BackToTop from "react-back-to-top-button";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

const Prewedding = () => {
  // install Swiper modules
  SwiperCore.use([Autoplay, Pagination, Navigation]);

  return (
    <>
      {/* <BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
      >
        <i class="fa fa-arrow-circle-o-up" aria-hidden="true"></i>
      </BackToTop> */}
      <BackTop />
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
              <Image
                loading="lazy"
                src="assets/images/prewedding1.jpg"
                alt=""
                className="p-2"
              />
              <Image
                loading="lazy"
                src="assets/images/prewedding2.jpg"
                alt=""
                className="p-2"
              />
            </div>
            <div className="flex flex-col w-1/2 md:w-1/4">
              <Image
                loading="lazy"
                src="assets/images/prewedding3.jpg"
                alt=""
                className="p-2"
              />
              <Image
                loading="lazy"
                src="assets/images/prewedding4.jpg"
                alt=""
                className="p-2"
              />
            </div>
            <div className="flex flex-col w-1/2 md:w-1/4">
              <Image
                loading="lazy"
                src="assets/images/prewedding5.jpg"
                alt=""
                className="p-2"
              />
              <Image
                loading="lazy"
                src="assets/images/prewedding6.jpg"
                alt=""
                className="p-2"
              />
            </div>
            <div className="flex flex-col w-1/2 md:w-1/4">
              <Image
                loading="lazy"
                src="assets/images/prewedding7.jpg"
                alt=""
                className="p-2"
              />
              <Image
                loading="lazy"
                src="assets/images/prewedding8.jpg"
                alt=""
                className="p-2"
              />
              <Image
                loading="lazy"
                src="assets/images/prewedding9.jpg"
                alt=""
                className="p-2"
              />
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              loading="lazy"
              src="assets/images/prewedding1.jpg"
              alt=""
              className="p-2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loading="lazy"
              src="assets/images/prewedding1.jpg"
              alt=""
              className="p-2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loading="lazy"
              src="assets/images/prewedding1.jpg"
              alt=""
              className="p-2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loading="lazy"
              src="assets/images/prewedding1.jpg"
              alt=""
              className="p-2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loading="lazy"
              src="assets/images/prewedding1.jpg"
              alt=""
              className="p-2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loading="lazy"
              src="assets/images/prewedding1.jpg"
              alt=""
              className="p-2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loading="lazy"
              src="assets/images/prewedding1.jpg"
              alt=""
              className="p-2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loading="lazy"
              src="assets/images/prewedding1.jpg"
              alt=""
              className="p-2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loading="lazy"
              src="assets/images/prewedding1.jpg"
              alt=""
              className="p-2"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <Footer />
    </>
  );
};

export default Prewedding;
