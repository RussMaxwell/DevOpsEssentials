import Hero from "./Components/Hero";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import React from "react";
import About from "./Components/About";
import { feedback } from "./data";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero feedback={feedback} />
      <Menu />
      <About />
    </div>
  );
};

export default App;
