import React, {useState, useEffect } from 'react';
import '../Style/Header.css'; // Assuming you use regular CSS
import $ from "jquery"; 
import { animateScroll as scroll } from "react-scroll";

const Header = ({ scrollToContact }) => {

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
    // Page cursors
    const handleMouseMove = (n) => {
      t.style.left = n.clientX + "px"; 
      t.style.top = n.clientY + "px"; 
      e.style.left = n.clientX + "px"; 
      e.style.top = n.clientY + "px"; 
      i.style.left = n.clientX + "px"; 
      i.style.top = n.clientY + "px";
    };

    const t = document.getElementById("cursor");
    const e = document.getElementById("cursor2");
    const i = document.getElementById("cursor3");

    document.body.addEventListener("mousemove", handleMouseMove);

    const addHover = () => {
      e.classList.add("hover");
      i.classList.add("hover");
    };

    const removeHover = () => {
      e.classList.remove("hover");
      i.classList.remove("hover");
    };

    removeHover();

    document.querySelectorAll(".hover-target").forEach((element) => {
      element.addEventListener("mouseover", addHover);
      element.addEventListener("mouseout", removeHover);
    });

    // Navigation
    const body = document.querySelector('body');
    const menu = document.querySelector('.menu-icon');



    const toggleClass = (element, stringClass) => {
      if (element.classList.contains(stringClass)) {
        element.classList.remove(stringClass);
      } else {
        element.classList.add(stringClass);
      }
    };

    const handleMenuClick = () => toggleClass(body, 'nav-active');

    menu.addEventListener('click', handleMenuClick);

    // Cleanup on component unmount
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll(".hover-target").forEach((element) => {
        element.removeEventListener("mouseover", addHover);
        element.removeEventListener("mouseout", removeHover);
      });
      menu.removeEventListener('click', handleMenuClick);
    };
  }, []);

  const toggleTheme = () => {
    const body = document.body;
    const switchElement = document.getElementById("switch");

    if (body.classList.contains("light")) {
      body.classList.remove("light");
      switchElement.classList.remove("switched");
    } else {
      body.classList.add("light");
      switchElement.classList.add("switched");
    }
  };

  useEffect(() => {
    const switchElement = document.getElementById("switch");
    switchElement.addEventListener('click', toggleTheme);
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => handleNavClick(link.id));
    });

    // Cleanup on component unmount
    return () => {
      switchElement.removeEventListener('click', toggleTheme);
      navLinks.forEach(link => {
        link.removeEventListener('click', () => handleNavClick(link.id));
      });
    };
  }, []);

  return (
    <>
      <header className="cd-header">
        <div className="header-wrapper">
          <div className="logo-wrap">
            <a href="#" className="hover-target"><span>Nirajan</span>gautam</a>
          </div>
          <div className="nav-but-wrap">
            <div className="menu-icon hover-target">
              <span className="menu-icon__line menu-icon__line-left"></span>
              <span className="menu-icon__line"></span>
              <span className="menu-icon__line menu-icon__line-right"></span>
            </div>
          </div>
        </div>
      </header>

      <div className="nav">
        <div className="nav__content">
          <ul className="nav__list">
            <li className="nav__list-item active-nav"><a href="#" className="hover-target">Home</a></li>
            <li className="nav__list-item"><a href="#" className="hover-target">Portfolio</a></li>
            <li className="nav__list-item"><a onClick={() => handleNavClick("About")} className="hover-target">About</a></li>
            <li className="nav__list-item"><a href="" className="hover-target">Blog</a></li>
            <li className="nav__list-item"><a onClick={() => handleNavClick("Contact")} className="hover-target" >Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="section full-height over-hide">	
        <div className="switch-wrap">
          <div id="switch" className="hover-target">
            <div id="circle"></div>
          </div>
        </div>
      </div>

      <div className="background">
        <div className="header">
          <div className="headerWrapper">
            <h6>we do</h6>
            <h1>
              Web Design <br /> & Development
            </h1>
            <div className="tooltip-cont">
              <img
                className="toolimg"
                src="https://icones.pro/wp-content/uploads/2021/05/icone-d-information-jaune.png"
                alt="info-tooltip image"
              ></img>
              <span className="tt-text">
                <p>
                  <strong>
                    <em>Social Media Links</em>
                  </strong>{" "}
                </p>
                <p>You can find my cv and social media in here.</p>
              </span>
            </div>
            <a className="button-wrapper" href="/#/getintouch">
              <span className="dot dot-1"></span>
              <span className="dot dot-2"></span>
              <span className="dot dot-3"></span>
              <span className="dot dot-4"></span>
              <span className="dot dot-5"></span>
              <span className="dot dot-6"></span>
              <span className="dot dot-7"></span>
              <span className="button bg-yellow-500 px-16 py-4 rounded-full uppercase">
                GET IN TOUCH
              </span>
            </a>
            <div className="circle blue"></div>
            <div className="square red"></div>
            <div className="triangle green">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 177.893 177.893"
              >
                {/* Your SVG code */}
              </svg>
            </div>
            <div className="circle orange"></div>
          </div>
        </div>
      </div>

      <div className='cursor' id="cursor"></div>
      <div className='cursor2' id="cursor2"></div>
      <div className='cursor3' id="cursor3"></div>
    </>
  );
};

export default Header;
