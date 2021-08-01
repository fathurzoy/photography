import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import React from "react";

const ContactUs = () => {
  return (
    <div>
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
      <Footer />
    </div>
  );
};

export default ContactUs;
