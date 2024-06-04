import React, { useEffect, useState } from "react";
import "../Style/Getintouch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faLinkedin,
  faInstagram,
  faGitSquare
} from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";
import emailjs from "emailjs-com";
import CV from '../assets/Docx/CV.docx'; 
import { animateScroll as scroll } from "react-scroll";
import Qualifiation from "../Home/Qualification"

const GetInTouch = () => {
  const [Email, setEmail] = useState("");
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleNavClick = (section) => {
    setIsOverlayOpen(false);
    if (location.pathname !== "/") {
      window.location.href = `/#${section}`;
    } else {
      const element = document.getElementById(section);
      if (element) {
        scroll.scrollTo(element.offsetTop, {
          duration: 500,
          smooth: true,
        });
      }
    }
  };

  useEffect(() => {
    const hero = document.querySelector("[data-hero]");
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);

      gsap.to(hero, {
        "--x": `${x}%`,
        "--y": `${y}%`,
        duration: 0.3,
        ease: "sine.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const countDownToBirthday = () => {
      const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

      let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "05/05/",
        birthday = dayMonth + yyyy;

      today = mm + "/" + dd + "/" + yyyy;
      if (today > birthday) {
        birthday = dayMonth + nextYear;
      }

      const countDown = new Date(birthday).getTime();
      const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / day);
        document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        );
        document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        );
        document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        );

        if (distance < 0) {
          document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
      }, 1000);
    };

    countDownToBirthday();
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "CV.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_email: Email,
    };
    emailjs
      .send(
        "service_d5t73ko",
        "template_4ikfptm",
        templateParams,
        "vd2KgeAFyaaYEtnq_"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Email sent successfully!");
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
      });

    e.target.reset();
  };

  useEffect(() => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => handleNavClick(link.id));
    });

    // Cleanup on component unmount
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', () => handleNavClick(link.id));
      });
    };
  }, []);

  return (
    <>
   {/* <Header
      /> */}

<nav class="navsab vertical">
  <ul>
    <li>
      <a href="#">
        <i class="material-icons">Home</i>
      </a>
    </li>
    <li>
      <a href="#">
         <i class="material-icons">Projects</i>
      </a>
    </li>
    <li>
      <a onClick={() => handleNavClick("Qualifiation")}>
         <i class="material-icons">Education</i>
      </a>
    </li>
    <li>
      <a onClick={() => handleNavClick("SendCv")}>
         <i class="material-icons">Sendmail</i>
      </a>
    </li>
  </ul>
</nav>
      <div className="wrapper">
        <div className="hero">
          <p className="hero__heading" onClick={handleDownloadCV}>
            Download CV
          </p>
        </div>
        <div className="hero hero--secondary" aria-hidden="true" data-hero>
          <div className="Apostion">
            <a
              href="#"
              className="header__btn"
              target="_blank"
              title="Download My CV"
              onClick={handleDownloadCV}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="unique-mid">
        <a
          className="unique-btn unique-fb"
          href="https://www.facebook.com/profile.php?id=100006722445975"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          className="unique-btn unique-ytb"
          href="https://www.youtube.com/channel/UCBDIOY-P_OxL25_ApjdJ2uA"
          target="_blank"
        >
          <FontAwesomeIcon className="i" icon={faYoutube} />
        </a>
        <a
          className="unique-btn unique-tw"
          href="https://www.linkedin.com/in/nirajan-gautam-646a39253"
          target="_blank"
        >
          <FontAwesomeIcon className="i" icon={faLinkedin} />
        </a>
        <a
          className="unique-btn unique-git"
          href="https://github.com/nirajann"
          target="_blank"
        >
          <FontAwesomeIcon className="i" icon={faGitSquare} />
        </a>
        <a
          className="unique-btn unique-ig"
          href="https://www.instagram.com/luvnirajan.dev?igsh=eG85NzBpdDk2Z3Vh"
          target="_blank"
        >
          <FontAwesomeIcon className="i" icon={faInstagram} />
        </a>
      </div>

      <section id="Qualifiation">
        <Qualifiation />
      </section>
        <div className="SendCV" id="SendCv">
          
    <h1 className="h1text">Send Mail To learn more about
      
      <div class="scroller">
        <span>
          WebDesign<br/>
          MobileDesign<br/>
          Editing<br/>
          Hosting
        </span>
      </div>
      </h1>
      
  
 
          <form onSubmit={sendEmail}>
            <input
              id="input-email"
              className="mail-input"
              value={Email}
              placeholder="Type Your Email."
              type="email"
              name="user_email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn-mail-receive">
              Shoot
            </button>
          </form>
        </div>
        <div className="Bdaycontainer">
          <h1 id="headline">Countdown to my birthday</h1>
          <div id="countdown">
            <ul>
              <li className="birthdayli">
                <span id="days"></span>days
              </li>
              <li className="birthdayli">
                <span id="hours"></span>Hours
              </li>
              <li className="birthdayli">
                <span id="minutes"></span>Minutes
              </li>
              <li className="birthdayli">
                <span id="seconds"></span>Seconds
              </li>
            </ul>
          </div>
          <div id="content" className="emoji">
            <span>🥳</span>
            <span>🎉</span>
            <span>🎂</span>
          </div>
        </div>
  
    </>
  );
};

export default GetInTouch;
