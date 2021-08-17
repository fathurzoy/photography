import { BackTop, Image } from "antd";
import Footer from "components/Footer/Footer";
import Hero from "components/Hero/Hero";
import HomeContent from "components/HomeContent/HomeContent";
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

const Home = () => {
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
      <div className="flex flex-col">
        <Navbar />
        <Hero />
        <div className="container content py-12 mx-auto">
          <HomeContent />
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
      </div>
    </>
  );
};

export default Home;
