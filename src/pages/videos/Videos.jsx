import { BackTop, Image } from "antd";
import CardVideo from "components/CardVideo/CardVideo";
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

const Videos = () => {
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
      <div className="content w-3/4 mx-auto flex flex-wrap container justify-center min-h-screen mt-10 mb-10">
        <CardVideo
          img="assets/images/video1.jpg"
          title="Ellyana & Wahyu | NTT Prewedding"
          link=""
        />
        <CardVideo
          img="assets/images/video2.jpg"
          title="Cyril & Iyan | Bogor Prewedding"
          link=""
        />
        <CardVideo
          img="assets/images/video3.jpeg"
          title="Rindi & Edward | Jogja Prewedding"
          link=""
        />
        <CardVideo
          img="assets/images/video4.jpg"
          title="Harley & Rivelita | International Wedding"
          link=""
        />
        <CardVideo
          img="assets/images/video5.jpg"
          title="Ferdy & Sherly’s | International Wedding"
          link=""
        />
        <CardVideo
          img="assets/images/video6.jpeg"
          title="Billy & Stella | International Wedding"
          link=""
        />
        <CardVideo
          img="assets/images/video7.jpg"
          title="Aji & fanny | National Wedding"
          link=""
        />
        <CardVideo
          img="assets/images/video8.jpg"
          title="Agung & Dita | National Wedding"
          link=""
        />
        <CardVideo
          img="assets/images/video9.jpg"
          title="Muchtia & Nanda | National Wedding"
          link=""
        />
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

export default Videos;
