import React from "react";
import heroimg from "../assets/heroimg.png";
import NewReviews from "./NewReviews";

const Hero = ({ feedback }) => {
  return (
    <div id="home">
      <div className="bg-red-100 align-element grid grid-row pb-28 md:grid-cols-2 items-center pt-6">
   
        <NewReviews feedback={feedback}></NewReviews>

        <div className="block">
          <img
            src={heroimg}
            alt="Pizza"
            className="mx-auto w-196 h-92 object-cover opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
