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

const Pricelist = () => {
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
      <div className="pricelist container mx-auto mb-10 mt-16 px-2">
        <div className="header">
          <p className="text-base md:text-xl font-medium">
            Hai, Terima kasih telah mengunjungi website kita.
          </p>
          <p className="text-base md:text-lg font-bold">
            Paket Prewedding Alienco, mulai dari Rp. 7,5 Juta
          </p>
          <p className="text-base md:text-lg font-bold">
            Paket Wedding Alienco, mulai dari Rp. 20,5 Juta
          </p>
        </div>
        <div className="content flex flex-col justify-center mt-10">
          <p>
            Untuk detail paket Wedding & Prewedding Alienco Photography bisa
            kamu download pricelist detail kami dengan versi PDF
          </p>
          <img
            src="assets/images/pdf.jpeg"
            width="500px"
            alt=""
            className="self-center mt-10"
          />
          <button className="bg-green-600 hover:bg-green-700 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 sm:px-6 py-3 whitespace-no-wrap w-48 self-center mt-10">
            Chat Dengan Kami
          </button>
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

export default Pricelist;
