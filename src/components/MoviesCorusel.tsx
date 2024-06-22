import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import caruselOne from "../assets/caruselImages/1.jpg";
import caruselTwo from "../assets/caruselImages/2.jpg";
import caruselThree from "../assets/caruselImages/3.jpg";
import caruselFour from "../assets/caruselImages/4.jpg";
import caruselFive from "../assets/caruselImages/5.jpg";
import caruselSix from "../assets/caruselImages/6.jpg";
import caruselSeven from "../assets/caruselImages/7.jpg";
import caruselEight from "../assets/caruselImages/8.jpg";
import caruselNine from "../assets/caruselImages/9.jpg";

const slides = [
  caruselFive,
  caruselOne,
  caruselTwo,
  caruselThree,
  caruselFour,
  caruselSix,
  caruselSeven,
  caruselEight,
  caruselNine,
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MoviesCarousel: React.FC = () => {
  return (
    <div className="p-4 w-full max-w-[950px]">
      <Carousel
        responsive={responsive}
        customTransition="transform 500ms ease-in-out"
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        arrows={false}
      >
        {slides.map((slide, index) => (
          <div key={index} className="block w-full h-full transform scale-y-2">
            <img
              src={slide}
              className="block w-full h-full rounded-5xl"
              alt={`Slide ${index + 1}`}
              style={{ objectFit: "cover", borderRadius: "15px" }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MoviesCarousel;
