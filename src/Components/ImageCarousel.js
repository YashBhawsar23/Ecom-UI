import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Styles/Carousel.css";
import { Carousel } from "react-responsive-carousel";

const ImageCarousel = () => {
  return (
    <div className="carousel">
      <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
        <div>
          <img src="images/Carousel/img1.png" alt="Image 1" />
        </div>
        <div>
          <img src="images/Carousel/img2.png" alt="Image 2" />
        </div>
        <div>
          <img src="images/Carousel/img3.png" alt="Image 3" />
        </div>
        <div>
          <img src="images/Carousel/img4.png" alt="Image 4" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
