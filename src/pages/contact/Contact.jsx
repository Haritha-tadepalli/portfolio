import React, { useRef } from "react";
import "./contact.css";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiFillCloseCircle,
} from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const emailSentPopup = useRef();
  const closePopupButton = useRef();

  const closeEmailSentPopup = () => {
    emailSentPopup.current.style.display = "none";
  };          

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      "service_mm1osv9", //service id
      "template_ui9aj35", // template id
      form.current,
      "wZxxwkxvgL6b9Dvmq" //public key
      )
      .then(
        (result) => {
          console.log(result.text);
          emailSentPopup.current.style.display = "block";
          // setTimeout(() => {
          //   emailSentPopup.current.style.display = "none";
          // }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const myEmail = "t.haritha032@gmail.com";

  const sendMail = () => {
    window.location.href = `mailto:${myEmail}`;
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__wrapper">
        <div className="contact__letsChat">
          <div className="contact__para">
            <h1 className="heading">Let's Talk.</h1>
            <p className="para">Let's work/create something together</p>
            <button className="contact__email" onClick={sendMail}>
              <HiOutlineMail size="3rem" />
              <p className="email__para">
                Mail me at <br /> {myEmail}
              </p>
            </button>
          </div>
          <div className="contact__links">
            <a
              href="https://www.linkedin.com/in/haritha-tadepalli/"
              className="contact__icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineLinkedin size="3.25rem" />
            </a>
            <a
              href="https://github.com/Haritha-tadepalli"
              className="contact__icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub size="3.25rem" />
            </a>
            <a
              href="https://www.instagram.com/haritha_tadepalli"
              className="contact__icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram size="3.25rem" />
            </a>
          </div>
        </div>
        <div className="contact__emailBox">
          <h2 className="message">Write me a message 👇</h2>
            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
            <div id="emailSentPopup" ref={emailSentPopup} className="email-sent-popup">
        Email Sent Successfully!
        <AiFillCloseCircle id="closePopup" ref={closePopupButton} className="close-popup" size="1.25rem" onClick={closeEmailSentPopup}/>
      </div>
        </div>
      </div>
      
      <div className="contact__horizontalLine"></div>
    </section>
  );
};

export default Contact;
