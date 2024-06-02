import React, { useState } from "react";
import "../Style/Contact.css";

const Contact = () => {
  const [expandedFields, setExpandedFields] = useState([]);

  const handleFieldHover = (index) => {
    setExpandedFields((prevExpandedFields) => {
      if (!prevExpandedFields.includes(index)) {
        return [...prevExpandedFields, index];
      }
      return prevExpandedFields;
    });
  };

  const handleFieldClick = (index) => {
    setExpandedFields((prevExpandedFields) => {
      if (!prevExpandedFields.includes(index)) {
        return [...prevExpandedFields, index];
      }
      return prevExpandedFields.filter((item) => item !== index);
    });
  };

  const handleBlur = (e, index) => {
    const { value } = e.target;
    if (!value.trim()) {
      setExpandedFields((prevExpandedFields) =>
        prevExpandedFields.filter((item) => item !== index)
      );
    }
  };

  return (
    <>
     <h1>Contact Me!</h1>
      <div className="contact-form">
       
        <form>
          <div
            className={`field name-box ${
              expandedFields.includes(0) ? "field-expanded" : ""
            }`}
            onMouseEnter={() => handleFieldHover(0)}
            onMouseLeave={() => handleFieldHover(0)}
            onClick={() => handleFieldClick(0)}
          >
            <input
              className="text-area"
              type="text"
              id="name"
              placeholder="Who Are You?"
              onBlur={(e) => handleBlur(e, 0)}
            />
            <label htmlFor="name">Name</label>
          </div>
          <div
            className={`field email-box ${
              expandedFields.includes(1) ? "field-expanded" : ""
            }`}
            onMouseEnter={() => handleFieldHover(1)}
            onMouseLeave={() => handleFieldHover(1)}
            onClick={() => handleFieldClick(1)}
          >
            <input
              className="text-area"
              type="text"
              id="email"
              placeholder="Example@Email.com"
              onBlur={(e) => handleBlur(e, 1)}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div
            className={`field message-box ${
              expandedFields.includes(2) ? "field-expanded" : ""
            }`}
            onMouseEnter={() => handleFieldHover(2)}
            onMouseLeave={() => handleFieldHover(2)}
            onClick={() => handleFieldClick(2)}
          >
            <textarea
              className="text-area"
              placeholder="Your message goes here..."
              id="message"
              onBlur={(e) => handleBlur(e, 2)}
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <button className="contact-submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
