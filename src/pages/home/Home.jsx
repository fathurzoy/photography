import Footer from "components/Footer/Footer";
import Hero from "components/Hero/Hero";
import HomeContent from "components/HomeContent/HomeContent";
import Navbar from "components/Navbar/Navbar";
import React from "react";

const Home = () => {
  return (
    <>
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
