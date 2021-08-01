import CardBlog from "components/CardBlog/CardBlog";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import React from "react";
import BackToTop from "react-back-to-top-button";

const Blog = () => {
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
      <div className="pricelist container mx-auto mb-10 mt-10 min-h-screen flex flex-wrap">
        <div className="card w-full mb-4 sm:w-1/3 md:w-1/4">
          <CardBlog
            img="assets/images/blog1.jpg"
            title="Kusumo Inten, Sanggar Rias Jawa Pilihan Para Pengantin"
            desc="Menyelenggarakan pernikahan dengan konsep Adat Jawa tentu banyak yang dipersiapkan. Apalagi kalau kamu tampil dengan…"
          />
        </div>
        <div className="card w-full mb-4 sm:w-1/3 md:w-1/4">
          <CardBlog
            img="assets/images/blog2.jpg"
            title="Amarta WO, Miliki Segudang Pengalaman Kolaborasi"
            desc="Nikah Tanpa Ribet dengan Pakai Amarta WO Belum lama ini merayakan anniversary-nya yang kesepuluh, alias…"
          />
        </div>
        <div className="card w-full mb-4 sm:w-1/3 md:w-1/4">
          <CardBlog
            img="assets/images/blog3.jpg"
            title="Rekomendasi Venue Pernikahan, Gedung Aneka Tambang"
            desc="Auditorium Andrawina di Gedung Aneka Tambang Mau nikah dimana? Saat ini banyak sekali venue pernikahan yang…"
          />
        </div>
        <div className="card w-full mb-4 sm:w-1/3 md:w-1/4">
          <CardBlog
            img="assets/images/blog4.jpg"
            title="Buat Acara Pernikahan Lebih Seru dengan 4 Hal Ini!"
            desc="4 Agenda Ini Bikin Pernikahan Lebih Seru Lho! Agenda di acara pernikahan selain akad nikah,…"
          />
        </div>
        <div className="card w-full mb-4 sm:w-1/3 md:w-1/4">
          <CardBlog
            img="assets/images/blog5.jpg"
            title="Arti di Balik Warna Untuk Tema Pernikahanmu, Pilih Mana?"
            desc="Penasaran Arti di Balik Warna Untuk Tema Pernikahanmu? Tidak hanya tradisi saja yang memiliki makna.…"
          />
        </div>
        <div className="card w-full mb-4 sm:w-1/3 md:w-1/4">
          <CardBlog
            img="assets/images/blog6.jpg"
            title="Makna Riasan Pengantin Sunda Yang Harus Kamu Ketahui!"
            desc="Tak Hanya Cantik, Riasan Pengantin Sunda Juga Sarat Makna! Suku di Pulau Jawa yang mendominasi…"
          />
        </div>
        <div className="card w-full mb-4 sm:w-1/3 md:w-1/4">
          <CardBlog
            img="assets/images/blog7.jpg"
            title="Rekomendasi Gaun Pengantin : Elegant Wedding Dress by Jessica Huang"
            desc="Wedding Dress by Jessica Huang Gaun pernikahan merupakan impian semua wanita dimana ia memakai pakaian…"
          />
        </div>
        <div className="card w-full mb-4 sm:w-1/3 md:w-1/4">
          <CardBlog
            img="assets/images/blog8.jpg"
            title="4 Pertanyaan Penting Sebelum Menyewa Jasa Wedding Organizer"
            desc="Perlu Jasa Wedding Organizer? Jangan Lupa Tanyakan Hal Ini Ya! Menurut kalian, perlu tidak sih…"
          />
        </div>
        <div className="card w-full mb-4 sm:w-1/3 md:w-1/4">
          <CardBlog
            img="assets/images/blog9.jpg"
            title="Pesta Pernikahan di Tengah Wabah Virus COVID-19?"
            desc="Tunda atau Lanjut Pesta Pernikahan di Tengah Wabah Virus COVID-19? Banyak yang harus dipikirkan dalam persiapan…"
          />
        </div>
        <div className="card w-full mb-4 sm:w-1/3 md:w-1/4">
          <CardBlog
            img="assets/images/blog10.jpg"
            title="Dampak Penggunaan Hand Sanitizer Pada Cincin Pernikahan"
            desc="Ternyata Hand Sanitizer Berdampak Ini Pada Cincin Pernikahan! Beberapa minggu ini masyarakat sedang diresahkan dengan…"
          />
        </div>
        <div className="card w-full mb-4 sm:w-1/3 md:w-1/4">
          <CardBlog
            img="assets/images/blog11.jpg"
            title="Dekorasi Penuh Bunga by Sista Decoration di Pernikahan Ana & Willy"
            desc="Dekorasi Penuh Bunga by Sista Decoration Sista Decoration. – Pesta pernikahan merupakan momen penting bagi…"
          />
        </div>
        <div className="card w-full mb-4 sm:w-1/3 md:w-1/4">
          <CardBlog
            img="assets/images/blog12.jpg"
            title="Rekomendasi Robe Pengantin, Beauty Robe by Robe.bit"
            desc="Beauty Robe by Robe.bit Sebelum pesta pernikahan dimulai, biasanya pengantin wanita dan pengantin laki-laki melakukan…"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
