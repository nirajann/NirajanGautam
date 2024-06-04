import React, { useEffect, useRef } from "react";
import Header from "../Layout/Header";
import About from "./About";
import Contact from "../Home/contact";
import Qualification from "./Qualification";
import "../Style/Home.css";

const Home = () => {


  return (
    <>
      <Header
      />

      <section id="About">
        <About />
      </section>
    
      <br></br>
      <section id="Contact" >
        <Contact />
      </section>
    </>
  );
};

export default Home;
