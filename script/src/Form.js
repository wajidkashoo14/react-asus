import React from "react";
import { Link } from "react-router-dom";
import "./form.css";

function Form() {
  return (
    <div className="contact__form">
      <h1 className="airport__form__heading">corporate services</h1>
      <h3 className="airport__form__heading__secondary">
        for all your corporate business needs please contact us for a tailored
        taxi service
      </h3>
      <h2 className="get__in__touch">Get In Touch</h2>
      <form
        className="airport__form"
        action="https://enquires@alphataxisheffield.co.uk"
        method="POST"
      >
        <label>Name</label>
        <input type="text " placeholder="Name" required />
        <label>Email</label>
        <input type="email" placeholder="Email" required />
        <label>Message</label>
        <input
          type="hidden"
          name="_next"
          value="https://alphataxisheffield.co.uk/thankyou"
        ></input>
        <textarea placeholder="Type your message here" required></textarea>
        <Link to="/thankyou">
          <button type="submit" className="form-btn">
            Send
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Form;
