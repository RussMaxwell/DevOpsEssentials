import React from "react";
import aboutus from "../assets/aboutus.jpeg";

const About = () => {
  return (
    <>
      <div id="aboutus" className="bg-red-100 text-center pt-20">
        <h2 className="text-3xl font-medium tracking-wider capitalize">
          About Us
        </h2>
      </div>
      <div className="bg-red-100 align-element grid grid-row pb-28">
        <article className="md:text-left md:ml-6">
          <p className="text-slate-600 mt-8 px-6 leading-loose pb-10 md:px-60 md:text-2xl">
            Welcome to Joan's Pizza, the best pizza in town! We are a
            family-owned and operated business that has been serving delicious
            pizzas since 1977. We use only the freshest ingredients and make our
            dough and sauce from scratch every day. Whether you prefer thin
            crust or thick crust, we have a pizza for you. We are open seven
            days a week from 11 a.m. to 10 p.m. Come and visit us today and
            taste the difference at Joan's Pizza!
          </p>
          <img
            src={aboutus}
            alt="About Us"
            className="hidden mx-auto md:block w-196 h-92 object-cover"
          />
        </article>
      </div>
    </>
  );
};

export default About;
