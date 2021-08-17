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

const ContactUs = () => {
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
      <div className="contactus container mx-auto justify-center min-h-screen px-2 md:px-32 mt-10 mb-10">
        <div className="header flex flex-col gap-5">
          <h3 className="font-bold">Phone :</h3>
          <h3>Renny: +62 812-8464-361</h3>
          <h3>Office: (021) 22910777</h3>
          <div className="line border-b-2 border-black"></div>
        </div>
        <div className="content flex flex-col gap-5 mt-8 text-left">
          <p className="font-semibold text-lg text-gray-700">Office :</p>
          <p>Griya Bukit Mas Blok D no.7 Depok</p>
        </div>
      </div>
      <div className="container content py-12 mx-auto">
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

export default ContactUs;
