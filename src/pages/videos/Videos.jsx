import CardVideo from "components/CardVideo/CardVideo";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import React from "react";
import BackToTop from "react-back-to-top-button";

const Videos = () => {
  return (
    <>
      <BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
      >
        <i class="fa fa-arrow-circle-o-up" aria-hidden="true"></i>
      </BackToTop>
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
      <Footer />
    </>
  );
};

export default Videos;
