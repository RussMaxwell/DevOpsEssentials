import React from "react";
import { links } from "../data";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  const showToast = () => {
    toast.error("This is a demo site and ordering functionality is disabled.");
  };

  return (
    <div>
      <nav className="bg-red-100 relative mx-auto p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            Joan's
            <span className="text-red-700"> Pizza</span>
          </h2>
          <div className="hidden md:flex flex-row space-x-6">
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <a
                  key={id}
                  href={href}
                  className="capitalize text-lg tracking-wide hover:text-red-500 duration-300"
                >
                  {text}
                </a>
              );
            })}
          </div>
          <button
            onClick={showToast}
            className="p-3 px-6 pt-2 text-white bg-red-700 rounded-full shadow-lg hover:bg-red-500 duration-300"
          >
            Order Now
          </button>
        </div>
        <ToastContainer position="top-center" />
      </nav>
    </div>
  );
};

export default Navbar;
