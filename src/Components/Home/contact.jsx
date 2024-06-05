import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import { gsap, Expo, Bounce } from "gsap";
import { useNavigate } from "react-router-dom";
import "../Style/Contact.css";

const Contact = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const signUpFormRef = useRef(null);
  const hiddenFormBottom = useRef("-420px");
  const hiddenFormRight = useRef("-277px");

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

    handleResize();

    return () => {
      if (contactButton) {
        contactButton.removeEventListener("click", handleButtonClick);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const hideContactForm = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 768) {
      gsap.to(signUpFormRef.current, {
        duration: 0.3,
        bottom: hiddenFormBottom.current,
        ease: Bounce.easeOut,
      });
    } else {
      gsap.to(signUpFormRef.current, {
        duration: 0.3,
        right: hiddenFormRight.current,
        ease: Bounce.easeOut,
      });
    }

    gsap.to(".form-arrow", {
      duration: 0.7,
      rotationZ: 0,
      transformOrigin: "center",
      ease: Expo.easeOut,
    });
  };

  const HandleContact = (e) => {
    e.preventDefault();

    let valid = true;
    if (!Name) {
      setNameError("Name must be filled");
      valid = false;
    } else {
      setNameError("");
    }
    if (!Email) {
      setEmailError("Email must be filled");
      valid = false;
    } else {
      setEmailError("");
    }
    if (!Message) {
      setMessageError("Message must be filled");
      valid = false;
    } else {
      setMessageError("");
    }

    if (!valid) {
      setAlertMessage("Please fill in all required fields.");
      return;
    }

    const templateParams = {
      from_name: Name,
      from_email: Email,
      message: Message,
    };

    emailjs
      .send(
        "service_d5t73ko", // Replace with your EmailJS service ID
        "template_830aoe8", // Replace with your EmailJS template ID
        templateParams,
        "vd2KgeAFyaaYEtnq_" // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setAlertMessage("");
        setSuccessMessage("Email sent successfully!");
        hideContactForm();
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        setAlertMessage("Failed to send email. Please try again later.");
      });
  };

  return (
    <>
      <div id="signUpForm" ref={signUpFormRef} style={{ bottom: hiddenFormBottom.current, right: hiddenFormRight.current }}>
        <div role="form" className="wpcf7" id="wpcf7-f276-o1" dir="ltr">
          <div className="screen-reader-response"></div>
          <form onSubmit={HandleContact} className="wpcf7-form" noValidate="noValidate">
            <div style={{ display: "none" }}>
              <input type="hidden" name="_wpcf7" value="276" />
              <input type="hidden" name="_wpcf7_version" value="4.5.1" />
              <input type="hidden" name="_wpcf7_locale" value="" />
              <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f276-o1" />
              <input type="hidden" name="_wpnonce" value="3da6ca0018" />
            </div>

            <div className="contact-button">Contact Us <span className="form-arrow">&#9650;</span></div>

            {alertMessage && <div className="alert-message">{alertMessage}</div>}
            {successMessage && <div className="success-message">{successMessage}</div>}

            <p>
              <span className="wpcf7-form-control-wrap your-name">
                <input
                  type="text"
                  name="your-name"
                  value={Name}
                  size="40"
                  className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                  aria-required="true"
                  aria-invalid="false"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </span><br />
              <span className="wpcf7-form-control-wrap your-email">
                <input
                  type="email"
                  name="your-email"
                  value={Email}
                  size="40"
                  className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                  aria-required="true"
                  aria-invalid="false"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </span><br />
              <span className="wpcf7-form-control-wrap your-phone">
                <input
                  type="text"
                  name="your-phone"
                  value=""
                  size="40"
                  className="wpcf7-form-control wpcf7-text"
                  aria-invalid="false"
                  placeholder="Phone (optional)"
                />
              </span><br /><br />
              <span className="wpcf7-form-control-wrap your-message">
                <textarea
                  name="your-message"
                  cols="40"
                  rows="10"
                  className="wpcf7-form-control wpcf7-textarea"
                  aria-invalid="false"
                  placeholder="Message"
                  value={Message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </span><br />
              <input type="submit" value="Send" className="wpcf7-form-control wpcf7-submit" />
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
