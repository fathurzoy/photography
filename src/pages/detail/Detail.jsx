import { Input, Image } from "antd";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import React from "react";

const { Search } = Input;

const Detail = () => {
  const onSearch = (value) => console.log(value);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto flex flex-col lg:flex-row gap-12 py-8 px-4 md:px-20 text-left ">
        <div className="w-full lg:w-3/5 ">
          <div className="header flex flex-col">
            <Image src="assets/images/detail-header.jpg" />
            <h2 className="font-medium text-3xl text-left leading-10 mb-3">
              Amarta WO, Miliki Segudang Pengalaman Kolaborasi
            </h2>
          </div>
          <div className="slug">
            <p>BLOG · APRIL 1, 2020</p>
            <div className="flex gap-2 flex-wrap">
              <div className="bg-gray-800  transition-all duration-200 focus:outline-none shadow-inner text-white px-4 sm:px-5 py-2 whitespace-no-wrap">
                SHARE THIS
              </div>
              <button className="bg-blue-800 hover:bg-blue-700 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 sm:px-5 py-2 whitespace-no-wrap">
                Facebook
              </button>
              <button className="bg-blue-500 hover:bg-blue-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 sm:px-5 py-2 whitespace-no-wrap">
                Twitter
              </button>
              <button className="bg-green-600 hover:bg-green-500 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 sm:px-5 py-2 whitespace-no-wrap">
                Whatsapp
              </button>
              <button className="bg-red-600 hover:bg-red-500 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 sm:px-5 py-2 whitespace-no-wrap">
                Pin It
              </button>
            </div>
          </div>
          <div className="desc py-8">
            <h1 className="font-bold text-4xl text-center">
              Nikah Tanpa Ribet dengan Pakai Amarta WO
            </h1>
            <p className="text-base">
              Belum lama ini merayakan anniversary-nya yang kesepuluh, alias 1
              dekade, Amarta WO memang tidak diragukan lagi sepak terjangnya di
              wedding. Layanan profesionalnya selama mendampingi kalian di hari
              bahagia adalah bukti dan sangat mencerminkan pengalaman dan jam
              terbangnya selama ini. Memiliki personel tim lebih dari 50 orang
              dengan kemampuan dan kinerja hebat perorangnya. Sudah pasti akan
              membuatmu puas dan merasa aman di hari pernikahanmu entah dengan
              tim atau personel mana kamu dipertemukan nantinya.
            </p>
            <h3 className="title font-bold text-xl">Services</h3>
            <Image src="assets/images/detail1.jpg" className="w-full" />
            <h3 className="title font-bold text-xl py-5">Services</h3>
            <p className="textbase leading-loose">
              Untuk layanan persiapan pernikahan yang secara keseluruhan akan
              di-handle oleh tim Amarta WO. Mereka bersedia meeting sebanyak
              yang kamu perlukan dan membantu dalam pemilihan vendor pernikahan.
              <h2 className="leading-10"> All in One Wedding Package</h2>
              Super komplit! Bukan hanya pemilihan vendor pernikahan dan
              meng-handle seluruh persiapan saja, urusan venue pernikahan kamu
              bisa serahkan ke mereka.
              <h1 className="leading-10">D-Day Wedding Organizer</h1>
              Bagi pasangan pengantin yang hanya butuh didampingi selama hari H,
              paket Amarta WO yang satu ini paling pas buat kalian. Mereka akan
              mendampingimu dan menjadi berkomunikasi dengan vendor lain selama
              acara.
              <br />
              <br />
              Paket lainnya adalah <b>Ala Carte Wedding Vendor Request </b>dan
              <b>Traditional Ceremony Before Wedding.</b>
            </p>
            <Image src="assets/images/detail2.jpg" className="w-full" />
            <h3 className="title font-bold text-xl py-5">
              Segudang Partner dan Pengalaman Kolaborasi
            </h3>
            <p>
              Lama berkecimpung di dunia vendor pernikahan tentu membuat Amarta
              WO punya segudang pengalaman berkolaborasi dengan top vendor
              pernikahan lainnya. Tak hanya kolaborasi, deretan partner yang
              dimiliki Amarta WO pun tidak main-main kualitasnya. Lengkapi
              kebutuhan pernikahanmu dengan partner Amarta WO, mulai dari venue,
              catering, foto dan video, hingga dekorasi serta entertainment.
            </p>
            <h3 className="title font-bold text-xl py-5">
              Segudang Partner dan Pengalaman Kolaborasi
            </h3>
            <ul class="list-inside list-disc">
              <li>
                Kalian akan punya lebih banyak waktu luang atau tidak perlunya
                curi-curi kerja selama persiapan pernikahan. Semua akan dibantu
                oleh tim Amarta. Kamu dan pasangan akan didampingi sampai
                closing acara di resepsi lho!
              </li>
              <li>
                Kepuasan klien adalah yang selalu diutamakan oleh Amarta Wedding
                Organizer. Semua paket mereka memiliki harga terbaik yang
                berbanding lurus dengan kualitas pelayanannya. Pengalaman
                pernikahan yang menyenangkan dan menenangkan untuk semua
                pengantin yang memilih Amarta.
              </li>
              <li>
                ut kepikiran dan ribet mengontrol vendor-vendor di hari
                pernikahan? Sstt… kan ada Amarta! Mereka siap di garda terdepan
                dan jadi pusat komunikasi untuk berkoordinasi antar vendor di
                hari H.
              </li>
            </ul>
            <p>
              Mau tau pengalaman performance tim Amarta Wedding Organizer selama
              di lapangan? Cek saja instagram mereka di @amarta.wo dan website
              resminya amartaorganizer.com. Jangan lupa cek juga foto-foto
              kinerja Amarta selama berkolaborasi dengan Alienco Photo di bawah
              ini!
            </p>
            <Image src="assets/images/detail3.jpg" className="w-full" />
            <div className="h-4"></div>
            <Image src="assets/images/detail4.jpg" className="w-full" />
            <div className="h-4"></div>
            <Image src="assets/images/detail5.jpg" className="w-full" />
            <div className="h-4"></div>
            <Image src="assets/images/detail6.jpg" className="w-full" />
          </div>
          <div className="tags">
            <div className="flex gap-2 flex-wrap">
              <div className="bg-gray-800  transition-all duration-200 focus:outline-none shadow-inner text-white px-4 sm:px-5 py-2 whitespace-no-wrap">
                SHARE THIS
              </div>
              <button className="bg-blue-800 hover:bg-blue-700 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 sm:px-5 py-2 whitespace-no-wrap">
                Facebook
              </button>
              <button className="bg-blue-500 hover:bg-blue-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 sm:px-5 py-2 whitespace-no-wrap">
                Twitter
              </button>
              <button className="bg-green-600 hover:bg-green-500 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 sm:px-5 py-2 whitespace-no-wrap">
                Whatsapp
              </button>
              <button className="bg-red-600 hover:bg-red-500 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 sm:px-5 py-2 whitespace-no-wrap">
                Pin It
              </button>
            </div>
            <div className="flex flex-wrap pt-5 ">
              <p className="text-gray-600 mb-0 mr-2">TAGS: </p>
              <p className="text-gray-600 mb-0 mr-2">#ALIENCO PHOTO</p>
              <p className="text-gray-600 mb-0 mr-2">
                #AMARTA WEDDING ORGANIER
              </p>
              <p className="text-gray-600 mb-0 mr-2">#AMARTA WO</p>
              <p className="text-gray-600 mb-0 mr-2">#WEDDING ORGANIER</p>
              <p className="text-gray-600 mb-0 mr-2">#WEDDING VENDOR </p>
            </div>
          </div>
          <div className="relatedPost py-5">
            <h3 className="text-2xl">Related Post</h3>
            <div className="card">
              <div className="float-left pr-3 pb-2">
                <Image src="assets/images/relatedpost1.jpg" />
              </div>
              <h2>Makna Riasan Pengantin Sunda Yang Harus Kamu Ketahui!</h2>
              <p>
                Makna Prosesi Wedding Toast Saat Resepsi Yang Wajib Kamu Ketahui
                Makna Prosesi Wedding Toast Saat Resepsi Yang Wajib Kamu Ketahui
                – Pernikahan merupakan acara sakral yang dilalui oleh setiap
                wanita dan pria yang hendak mengikat hubungan mereka dalam
                jenjang yang suci dan juga sah. Dalam prosesi pernikahan ada
                beberapa bagian yang memang direncanakan khusus …
              </p>
            </div>
            <div className="card">
              <div className="float-left pr-3 pb-2">
                <Image src="assets/images/relatedpost2.jpg" />
              </div>
              <h2>
                Yuk Intip Daftar Pantai Di Bali Yang Jadi Tujuan Utama
                Prewedding
              </h2>
              <p>
                Yuk Intip Daftar Pantai Di Bali Yang Jadi Tujuan Utama
                Prewedding Yuk intip daftar pantai di Bali yang jadi tujuan
                utama prewedding – Wisata pantai yang ada di Pulau Bali
                merupakan daya tarik utama yang menyebabkan para wisatawan luar
                negeri maupun dalam negeri menginginkan berwisata ke pulau Bali.
                Salah satu pantai yang paling terkenal adalah pantai …
              </p>
            </div>
            <div className="card">
              <div className="float-left pr-3 pb-2">
                <Image src="assets/images/relatedpost3.jpg" />
              </div>
              <h2>Kursus Fotografi Jakarta 2015 “Kejar 6 Ada Lagi!!!”</h2>
              <p>
                “Kejar Dephot Ada Lagi!!!” Untuk teman-teman Fotografi di
                seputaran Depok, Bogor, Jakarta dan sekitar ada kabar gembira
                untuk anda, yaitu bahwa Kejar 6 kembali ada untuk memberikan
                kursus fotografi Jakarta 2015. Bagi anda yang terlewat moment
                berharga belajar pada Kejar 1, Kejar 2, Kejar 3, Kejar 4 atau
                Kejar 5 pada tahun-tahun sebelumnya, jangan bersedih …
              </p>
            </div>
            <div className="card">
              <div className="float-left pr-3 pb-2">
                <Image src="assets/images/relatedpost4.jpg" />
              </div>
              <h2>Seri persiapan pernikahan : vendor wedding photography</h2>
              <p>
                Vendor wedding photography Dalam memilih vendor wedding
                photography bagi anda yang akan menikah tentu menjadi sebuah PR
                yang harus dikerjakan dengan baik. Karena foto pernikahan yang
                mengagumkan akan dikenang sepanjang masa. Usahakan semaksimal
                mungkin usaha yang anda kerahkan untuk mendapatan foto
                pernikahan yang indah untuk dikenang. Berikut Tips vendor
                wedding photography: Pemilihan Fotografer yang Tepat Pilihlah …
              </p>
            </div>
            <div className="card">
              <div className="float-left pr-3 pb-2">
                <Image src="assets/images/relatedpost5.jpeg" />
              </div>
              <h2>Foto prewedding di Pantai, Lokasi Outdoor yang Romantis</h2>
              <p>
                Foto prewedding di Pantai Setelah sebelumnya kita membahas
                tentang foto prewedding Outdoor yang menjadi pilihan favorit
                para fotografer dan pasangan calon pengantin, kini kita akan
                membahas tentang Foto prewedding di pantai. Lokasi Outdoor ini
                sangat banyak di pilih karena nuansa Romantis dan juga
                keindahaan alamnya yang alami. Foto prewedding di Pantai seakan
                menjadi pilihan nomor …
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <div className="search pb-8">
            <h2 className="font-bold">SEARCH FOR AN ARTICLE:</h2>
            <Search placeholder="Search.." onSearch={onSearch} enterButton />
          </div>
          <div className="profile pb-8">
            <h2 className="font-bold text-base">
              TRUSTED WEDDING VENDOR ON BRIDESTORY
            </h2>
            <button className="bg-pink-800 hover:bg-pink-700 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 sm:px-5 py-2 whitespace-no-wrap">
              ANDIWEDDING
            </button>
          </div>
          <div className="recentpost">
            <h2 className="font-bold text-base">RECENT POST</h2>
            <p className="to-blue-400">
              Kusumo Inten, Sanggar Rias Jawa Pilihan Para Pengantin
            </p>
            <p className="to-blue-400">
              Amarta WO, Miliki Segudang Pengalaman Kolaborasi
            </p>
            <p className="to-blue-400">
              Rekomendasi Venue Pernikahan, Gedung Aneka Tambang
            </p>
            <p className="to-blue-400">
              Buat Acara Pernikahan Lebih Seru dengan 4 Hal Ini!
            </p>
            <p className="to-blue-400">
              Arti di Balik Warna Untuk Tema Pernikahanmu, Pilih Mana?
            </p>
          </div>
          <div className="hastag pt-14">
            <p>
              FOTO PREWEDDING JAKARTA | PAKET WEDDING JAKARTA | PREWEDDING
              OUTDOOR JAKARTA | PREWEDDING PHOTOGRAPHY JAKARTA | INDONESIAN
              WEDDING PHOTOGRAPHER
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
