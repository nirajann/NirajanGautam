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

          <div class="logo"><img className='a-image aboutlogo' src={logo} alt="smit"></img></div>

          <div class="text">
          Crafting beauty from simplicity, Nirajan brings innovation to life. With a keen eye for detail, he turns concepts into captivating creations, making the ordinary exceptional.
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
