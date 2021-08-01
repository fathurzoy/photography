import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  return (
    <>
      <div className="homeCarousel">
        <div className="w-full px-2">
          <Carousel
            autoPlay
            showIndicators={true}
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            infiniteLoop
            interval="7000"
          >
            <div className="carouselContainers">
              <img src="assets/images/1.jpg" alt="" />
            </div>
            <div className="carouselContainers">
              <img src="assets/images/2.jpg" alt="" />
            </div>
            <div className="carouselContainers">
              <img src="assets/images/3.jpg" alt="" />
            </div>
            <div className="carouselContainers">
              <img src="assets/images/4.jpg" alt="" />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Hero;
