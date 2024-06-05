import React, { useEffect, useRef } from "react";
import "../Style/About.css"
import profile from "../assets/image/profile.jpg"
import BWprofile from "../assets/image/BWprofile.jpg"
import logo from "../assets/image/logo.png"
import SVG from "../assets/SVG/mail.svg"

const About = () => {


  return (
    <>
    <section class="about-me" id="about-me">
  <div class="AboutClasscontainer">
    <div class="about-me-container">
      <div class="about-me-title">
        About <br></br> Nirajan Gautam
      </div>

      <div class="about-me-flex-container">
        <div class="about-me-image">
          <div class="back-div"></div>
          <div class="black-image"><img className="a-image" src={BWprofile} alt="black"></img></div>
          <div class="main-image"><img className="a-image" src={profile} alt="smit"></img></div>
        </div>
        <div class="about-me-content">

          <div class="text">
          Hello! I’m Nirajan Gautam, a recent graduate with a degree in [Your Degree] from [Your University]. I specialize in web and mobile development, with expertise in HTML, CSS, JavaScript, Swift, and Kotlin. I'm passionate about technology and always eager to learn and innovate. Explore my portfolio to see my work and get in touch!
          </div>
        </div>
      </div>

      <div class="mail-button mail-button2">
        
        <a href="mailto:Nirajangautamworks@gmail.com"><img src={SVG} alt="mail"></img></a>
      </div>

    </div>

  </div>
</section>
    </>
  );
};

export default About;
