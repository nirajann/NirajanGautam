import React, { useEffect, useRef } from "react";
import { gsap, Expo, Bounce } from "gsap";
import "../Style/Contact.css";

const Contact = () => {
  const signUpFormRef = useRef(null);
  const hiddenFormBottom = useRef("-450px"); // Updated hidden position for desktop
  const hiddenFormRight = useRef("-277px"); // Default hidden position for mobile

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        signUpFormRef.current.style.bottom = hiddenFormBottom.current;
        signUpFormRef.current.style.right = "";
      } else {
        signUpFormRef.current.style.right = hiddenFormRight.current;
        signUpFormRef.current.style.bottom = "";
      }
    };

    const handleButtonClick = () => {
      const screenWidth = window.innerWidth;
      const formPosDesktop = signUpFormRef.current.style.bottom;
      const formPosMobile = signUpFormRef.current.style.right;

      if (screenWidth >= 768 && formPosDesktop !== "0px") {
        gsap.to(signUpFormRef.current, {
          duration: 0.7,
          bottom: 0,
          ease: Expo.easeOut,
        });
        gsap.to(".form-arrow", {
          duration: 1,
          rotationZ: 180,
          transformOrigin: "center",
          ease: Expo.easeOut,
        });
      } else if (screenWidth >= 768 && formPosDesktop === "0px") {
        gsap.to(signUpFormRef.current, {
          duration: 0.3,
          bottom: hiddenFormBottom.current,
          ease: Bounce.easeOut,
        });
        gsap.to(".form-arrow", {
          duration: 0.7,
          rotationZ: 0,
          transformOrigin: "center",
          ease: Expo.easeOut,
        });
      }

      if (screenWidth < 768 && formPosMobile !== "0px") {
        gsap.to(signUpFormRef.current, {
          duration: 0.7,
          right: 0,
          ease: Expo.easeOut,
        });
        gsap.to(".form-arrow", {
          duration: 1,
          rotationZ: 180,
          transformOrigin: "center",
          ease: Expo.easeOut,
        });
      } else if (screenWidth < 768 && formPosMobile === "0px") {
        gsap.to(signUpFormRef.current, {
          duration: 0.3,
          right: hiddenFormRight.current,
          ease: Bounce.easeOut,
        });
        gsap.to(".form-arrow", {
          duration: 0.7,
          rotationZ: 0,
          transformOrigin: "center",
          ease: Expo.easeOut,
        });
      }
    };

    const contactButton = document.querySelector(".contact-button");
    if (contactButton) {
      contactButton.addEventListener("click", handleButtonClick);
    }

    window.addEventListener("resize", handleResize);

    // Initial call to handleResize to set the correct position on load
    handleResize();

    return () => {
      if (contactButton) {
        contactButton.removeEventListener("click", handleButtonClick);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div id="signUpForm" ref={signUpFormRef} style={{ bottom: hiddenFormBottom.current, right: hiddenFormRight.current }}>
        <div role="form" className="wpcf7" id="wpcf7-f276-o1" dir="ltr">
          <div className="screen-reader-response"></div>
          <form action="/#wpcf7-f276-o1" method="post" className="wpcf7-form" noValidate="noValidate">
            <div style={{ display: "none" }}>
              <input type="hidden" name="_wpcf7" value="276" />
              <input type="hidden" name="_wpcf7_version" value="4.5.1" />
              <input type="hidden" name="_wpcf7_locale" value="" />
              <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f276-o1" />
              <input type="hidden" name="_wpnonce" value="3da6ca0018" />
            </div>

            <div className="contact-button">Contact Us <span className="form-arrow">&#9650;</span></div>

            <p>
              <span className="wpcf7-form-control-wrap your-name">
                <input type="text" name="your-name" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Name" />
              </span><br />
              <span className="wpcf7-form-control-wrap your-email">
                <input type="email" name="your-email" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email" />
              </span><br />
              <span className="wpcf7-form-control-wrap your-phone">
                <input type="text" name="your-phone" value="" size="40" className="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Phone (optional)" />
              </span><br /><br />
              <span className="wpcf7-form-control-wrap your-message">
                <textarea name="your-message" cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Message"></textarea>
              </span>
            </p>

            <input type="submit" value="Send" className="wpcf7-form-control wpcf7-submit" />
            <img className="" src="https://familyautoandtransmission.com/wp-content/plugins/contact-form-7/images/ajax-loader.gif" alt="Sending ..." style={{ visibility: "hidden" }} />

            <div className="wpcf7-response-output wpcf7-display-none"></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
