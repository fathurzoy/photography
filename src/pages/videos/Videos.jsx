import CardVideo from "components/CardVideo/CardVideo";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import React from "react";

const Videos = () => {
  return (
    <div>
      <Navbar />
      <div className="content flex flex-wrap container justify-center min-h-screen px-32 mt-10 mb-10">
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
    </div>
  );
};

export default Videos;
