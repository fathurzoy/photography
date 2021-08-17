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

const Wedding = () => {
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
              <Image
                loading="lazy"
                src="assets/images/weddinggallery1.jpg"
                alt=""
              />
            </div>
            <div className="w-1/2 p-1">
              <Image
                loading="lazy"
                src="assets/images/weddinggallery2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="top flex flex-wrap justify-center">
            <div className="w-1/2 p-1">
              <Image
                loading="lazy"
                src="assets/images/weddinggallery3.jpg"
                alt=""
              />
            </div>
            <div className="w-1/2 flex">
              <div className="w-1/2 p-1">
                <Image
                  loading="lazy"
                  src="assets/images/weddinggallery4.jpg"
                  alt=""
                />
              </div>
              <div className="w-1/2 p-1">
                <Image
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
                <Image
                  loading="lazy"
                  src="assets/images/weddinggallery6.jpg"
                  alt=""
                />
              </div>
              <div className="w-1/2 p-1">
                <Image
                  loading="lazy"
                  src="assets/images/weddinggallery7.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 p-1">
              <Image
                loading="lazy"
                src="assets/images/weddinggallery8.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="top flex flex-wrap justify-center">
            <div className="w-1/2 ">
              <div className="flex flex-col p-1">
                <Image
                  loading="lazy"
                  src="assets/images/weddinggallery9.jpg"
                  alt=""
                />
              </div>
              <div className="flex">
                <div className="w-1/2 p-1">
                  <Image
                    loading="lazy"
                    src="assets/images/weddinggallery10.jpg"
                    alt=""
                  />
                </div>
                <div className="w-1/2 p-1">
                  <Image
                    loading="lazy"
                    src="assets/images/weddinggallery11.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-1/2 p-1">
              <Image
                loading="lazy"
                src="assets/images/weddinggallery12.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="top flex flex-wrap justify-center">
            <div className="w-1/2 p-1">
              <Image
                loading="lazy"
                src="assets/images/weddinggallery13.jpg"
                alt=""
              />
            </div>
            <div className="w-1/2 flex">
              <div className="w-1/2 p-1">
                <Image
                  loading="lazy"
                  src="assets/images/weddinggallery14.jpg"
                  alt=""
                />
              </div>
              <div className="w-1/2 p-1">
                <Image
                  loading="lazy"
                  src="assets/images/weddinggallery15.jpg"
                  alt=""
                />
              </div>
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

export default Wedding;
