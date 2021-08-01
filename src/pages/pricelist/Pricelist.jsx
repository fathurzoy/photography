import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import React from "react";

const Pricelist = () => {
  return (
    <div>
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
      </div>
      <Footer />
    </div>
  );
};

export default Pricelist;
