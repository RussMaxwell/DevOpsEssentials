import React from "react";
import pizzamenu from "../assets/pizzamenu.png";
import smmenu1 from "../assets/smmenu1.png";
import smmenu2 from "../assets/smmenu2.png";

const Menu = () => {
  return (
    <div id="menu" className="bg-red-100">
      <img
        src={pizzamenu}
        alt="Pizza Menu"
        className="hidden md:block mx-auto w-196 h-92 object-cover opacity-80"
      />
      <img
        src={smmenu1}
        alt="Pizza Menu"
        className="mx-auto w-196 h-92 object-cover opacity-80 md:hidden"
      />
      <img
        src={smmenu2}
        alt="Pizza Menu"
        className="mx-auto w-196 h-92 object-cover opacity-80 md:hidden"
      />
    </div>
  );
};

export default Menu;
