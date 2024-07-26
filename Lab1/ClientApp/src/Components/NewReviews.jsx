import React from "react";
import Slider from "react-slick";
import fncyunderline from "../assets/fncyunderline.png";

const NewReviews = ({ feedback }) => {
  const settings = {
    dots: false,
    speed: 4000,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <section className="hidden md:block slick-container">
      <Slider {...settings}>
        {feedback.map((feed) => {
          const comment = feed.comment;
          const id = feed.id;
          const name = feed.name;

          return (
            <div key={id}>
              <p className="text-center text-1xl italic mt-6 md:text-5xl">
                "{comment}"
              </p>
              <p className="text-center text-1xl italic mt-6 md:text-2xl">
                {name}
              </p>
              <center className="pt-8">
                <img src={fncyunderline} alt="Fancy Underline" />
              </center>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default NewReviews;
