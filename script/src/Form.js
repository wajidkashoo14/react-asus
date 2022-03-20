import React from "react";
import "./form.css";

function Form() {
  return (
    <div className="contact__form">
      <h1 className="airport__form__heading">corporate services</h1>
      <h3 className="airport__form__heading__secondary">
        for all your corporate business needs please contact us for a tailored
        taxi service
      </h3>
      <form className="airport__form">
        <label>Name</label>
        <input type="text " placeholder="Name" />
        <label>Email</label>
        <input type="email" placeholder="Email" />
        <label>Message</label>
        <textarea placeholder="Type your message here"></textarea>
        <button type="submit" className="form-btn">
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;
