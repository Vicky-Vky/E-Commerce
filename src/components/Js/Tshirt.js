import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Styles/Tshirt.css";
const images = require.context('../../images/tshirts/', true);
const imageList = images.keys().map(image => images(image));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Tshirt = () => {
  return (
    <>
    
    <div className="Tshirt-title">
        <h1>Tshirt Latest</h1>
        <p>It is not about the brand when it comes to fashion. It all comes down to personal preference.</p>
    </div>
    <div className="tshirt-slider">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {imageList.map((image, index) => {
          return (
            <div className="slider" key={index}>
              <img src={image} alt="movie" />
              <button className="slider-btn">Add Cart </button>
            </div>
          );
        })}
      </Carousel>
    </div>
    </>
  );
};
export default Tshirt;
