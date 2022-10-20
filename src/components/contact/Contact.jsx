import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaLine } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_dsl92zu",
      "template_nzudpci",
      form.current,
      "JDYcdYmH7loHbyfLY"
    );
    e.target.reset();
  };
  return (
    <section className="work section" id="contact">
      <h2 className="section_title">Contact Me</h2>
      <span className="section_subtitle">Gat In Touch</span>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>joe22053814@mail.com</h5>
            <a href="mailto:joe22053814@gmail.com" target="_blank">
              <br /> Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiFacebookBoxFill className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>蕭浩廷</h5>
            <a
              href="https://www.facebook.com/profile.php?id=100001716027769"
              target="_blank"
            >
              <br /> Send a message
            </a>
          </article>
          <article className="contact_option">
            <FaLine className="contact_option-icon" />
            <h4>Line App</h4>
            <h5>+886 989 204 737</h5>
            <h5>ID:dola770816</h5>
            <a
              className="contact_option-a"
              href="https://line.me/ti/p/pPPEQLSyia"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        {/* <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="You Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="You Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form> */}
      </div>
    </section>
  );
};

export default Contact;
