import React, { useEffect } from 'react';
import '../Style/Header.css'; // Assuming you use regular CSS
import $ from "jquery"; 

const Header = () => {
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

    // Cleanup on component unmount
    return () => {
      switchElement.removeEventListener('click', toggleTheme);
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
            <li className="nav__list-item"><a href="#" className="hover-target">About</a></li>
            <li className="nav__list-item"><a href="#" className="hover-target">Blog</a></li>
            <li className="nav__list-item"><a href="#contact" className="hover-target">Contact</a></li>
          </ul>
        </div>
      </div>    

      <div class="section full-height over-hide">	
		<div class="switch-wrap">
			<div id="switch" class="hover-target">
				<div id="circle"></div>
			</div>
			<p><span>dark</span> - <span>light</span></p>
		</div>
	</div>	  
    
      <div className='cursor' id="cursor"></div>
      <div className='cursor2' id="cursor2"></div>
      <div className='cursor3' id="cursor3"></div>

      <a href="/" className="link-to-portfolio hover-target" target="/"></a>
    </>
  );
};

export default Header;
