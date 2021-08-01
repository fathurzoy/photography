import React from "react";

const HomeContent = () => {
  return (
    <div>
      <div className="galleryHome px-2 md:px-8 mt-8 flex flex-col">
        <div className="top flex flex-wrap justify-center">
          <div className="w-full md:w-1/4 p-2">
            <img src="assets/images/galleryhome1.jpg" alt="" />
          </div>
          <div className="w-full md:w-1/4 p-2">
            <img src="assets/images/galleryhome2.jpg" alt="" />
          </div>
        </div>
        <div className="top2 flex flex-wrap">
          <div className="w-full md:w-1/4 flex p-2">
            <img src="assets/images/galleryhome3.jpg" alt="" />
          </div>
          <div className="w-full md:w-1/4 flex p-2">
            <img src="assets/images/galleryhome4.jpg" alt="" />
          </div>
          <div className="w-full md:w-1/4 flex p-2">
            <img src="assets/images/galleryhome5.jpg" alt="" />
          </div>
          <div className="w-full md:w-1/4 flex p-2">
            <img src="assets/images/galleryhome6.jpg" alt="" />
          </div>
        </div>
        <div className="middle flex flex-wrap w-full">
          <div className="left flex  flex-col w-full md:w-1/4">
            <div className="p-2">
              <img src="assets/images/galleryhome7.jpg" alt="" />
            </div>
            <div className="p-2">
              <img src="assets/images/galleryhome8.jpg" alt="" />
            </div>
          </div>
          <div className="middle w-full md:w-1/2">
            <div className=" p-2">
              <img src="assets/images/galleryhome9.jpg" alt="" />
            </div>
          </div>
          <div className="left flex flex-col w-full md:w-1/4">
            <div className="p-2">
              <img src="assets/images/galleryhome10.jpg" alt="" />
            </div>
            <div className="p-2">
              <img src="assets/images/galleryhome11.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="top2 flex flex-wrap">
          <div className="w-full md:w-1/4 flex p-2">
            <img src="assets/images/galleryhome12.jpg" alt="" />
          </div>
          <div className="w-full md:w-1/4 flex p-2">
            <img src="assets/images/galleryhome13.jpg" alt="" />
          </div>
          <div className="w-full md:w-1/4 flex p-2">
            <img src="assets/images/galleryhome14.jpg" alt="" />
          </div>
          <div className="w-full md:w-1/4 flex p-2">
            <img src="assets/images/galleryhome15.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="priceless container mx-auto mt-8">
        <h1 className=" text-2xl md:text-5xl">PRICELESS EVENT OF YOUR LIFE</h1>
        <div className="contentPriceless  flex flex-col justify-center w-full">
          <p className="text-center py-6">
            it feels good when you can put a smile on someone’s face by simply
            being yourself
          </p>
          <img
            src="assets/images/priceless-img.jpg"
            alt=""
            className="self-center"
            width="500px"
          />
          <div className="text mt-8 flex justify-center text-left gap-5 flex-wrap px-5">
            <p className="w-full ">
              Alienco want to make finding your wedding photographer just as fun
              and exciting as searching for your wedding venue indoor or
              outdoor, like wedding shoes, wedding dress, wedding cake, and all
              that good stuff. Alienco photography are bounce of people who love
              to get involve at your big day who are constantly striving to
              surprise you with wedding photos that will amaze you! <br />
              <br />
              We share our passion, enthusiasm, and obsession for photography.
              Our photographers are inspired to push the envelope of what is
              possible every single day. They are creative, talented, no doubt
              it
              <br />
              <br />
              If you’re planning a wedding and you care deeply about
              photography, you’ve found the right place. Alienco want to help
              you get the photographer who will tell the story of your wedding
              day with distinctive imagery.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="testimony mt-10">
        <h1 className="text-3xl md:text-5xl">Testimony</h1>
        <div className="flex flex-wrap">
          <div className=" w-full sm:w-1/2 text-left mt-5 px-10 h-auto md:h-40 flex flex-col justify-between">
            <p>
              We’re grateful to have Alienco as our wedding photographer.
              Professional & excellent team. They captured all moments of our
              wedding perfectly from various angle point of view. Thank you for
              being involved in our wedding.
            </p>
            <div className="user flex mt-3 ">
              <div className="rounded-full overflow-hidden w-10 h-10">
                <img
                  className="object-cover w-full h-full"
                  src="assets/images/testimony1.jpeg"
                  alt="Preview"
                />
              </div>
              <p className="pl-3 py-2">MARK B. SALENDU</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 text-left mt-5 px-10 h-auto md:h-40 flex flex-col justify-between">
            <p>
              Terima kasih untuk alienco team, juga buat bang ali makasih
              banyak, kalian profesional, hasil foto dan video bagus keren,
              semua sesuai dengan keinginan, semoga alienco semakin berjaya.
            </p>
            <div className="user flex mt-3 ">
              <div className="rounded-full overflow-hidden w-10 h-10">
                <img
                  className="object-cover w-full h-full"
                  src="assets/images/testimony2.jpeg"
                  alt="Preview"
                />
              </div>
              <p className="pl-3 py-2">AGUNG & DITA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
