import React, { useState } from "react";
import "../sass/contactFormStyles.scss";

function ContactForm() {
  //states to make it a controlled component
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="container__contact-form">
      <form action="post" className="contact-form">
        <div className="inputs">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="xyz"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="inputs">
          <label htmlFor="">Your Email</label>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="absc@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputs">
          <label htmlFor="">Subject</label>
          <input
            type="text"
            name="subject"
            value={subject}
            placeholder="This is optional"
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="inputs">
          <label htmlFor="">Your Message</label>
          <textarea
            type="text"
            name="message"
            value={message}
            rows={5}
            placeholder="Hi, I'd like to ask about.."
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
