import React, { useEffect, useRef } from "react";
import Header from "../Layout/Header";
import  "../Style/Contact.css";

const Contact = () => {
 

  return (
    <>
    <div >
  <form class="contact-main">
    <div class="contact-left">
      <h2>Write to me</h2>
      <div class="input-field">
        <div class="input-name"><label>Name</label><input type="text" required="" value="" spellcheck="false" data-ms-editor="true" ></input></div>
        <div class="input-email"><label>Email</label><input type="email" required="" value=""></input></div>
      </div>
    </div>
    <div class="contact-right">
      <h2>Message</h2>
      <textarea type="text" placeholder="Write your message here..." spellcheck="false" data-ms-editor="true"></textarea>
      <button class="contact-btn" type="submit">Send Message</button>
    </div>
  </form>
</div>

<h2 class="text">DUMB TEXT</h2>
    </>
  );
};

export default Contact;
