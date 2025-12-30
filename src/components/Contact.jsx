import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import { FaEnvelope, FaGithub } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
        setStatus("success");
        form.current.reset();
      }, (error) => {
        console.error(error);
        setStatus("error");
      });
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact</h2>

      <div className="contact-box">
        <h3>Let’s Work Together</h3>
        <p>I’m open for freelance work, collaborations, and new opportunities.</p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />

          <button type="submit" className="contact-btn" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && <p className="success-msg" style={{ color: 'green', marginTop: '10px' }}>Message sent successfully!</p>}
          {status === "error" && <p className="error-msg" style={{ color: 'red', marginTop: '10px' }}>Something went wrong. Please try again.</p>}
        </form>

        <div className="contact-methods">
          <a href="mailto:abdelhamidfarhat@outlook.com" className="contact-item">
            <FaEnvelope /> Email directly
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
