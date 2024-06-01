import React, { useEffect, useRef } from "react";
import Header from "../Layout/Header";
import About from "./About";
import Contact from "../Home/contact";

const Home = () => {
  const studioRef = useRef(null);
  const newsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <Header 
        scrollToStudio={() => scrollToRef(studioRef)} 
        scrollToNews={() => scrollToRef(newsRef)} 
        scrollToContact={() => scrollToRef(contactRef)} 
      />
      
      <section id="About">
        <About />
      </section>


      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
