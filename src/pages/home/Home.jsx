import Footer from "components/Footer/Footer";
import Hero from "components/Hero/Hero";
import HomeContent from "components/HomeContent/HomeContent";
import Navbar from "components/Navbar/Navbar";
import React from "react";
import BackToTop from "react-back-to-top-button";

const Home = () => {
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
      <div className="flex flex-col">
        <Navbar />
        <Hero />
        <div className="content py-12 mx-auto">
          <HomeContent />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
