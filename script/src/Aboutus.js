import React from "react";
import "./aboutus.css";
import AboutUsImage from "./Assets/aboutus.jpg";
function Aboutus() {
  return (
    <div className="aboutus">
      <div className="about__info">
        <h1 className="heading__aboutus">about us</h1>
        <h3 className="heading__secondary">let's talk about alfa taxi first</h3>
        <p className="aboutus-details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima
          illo debitis fugiat voluptatem laborum minus! Eaque laborum tempora
          aliquam ipsum aliquid vero quos nostrum suscipit debitis veniam
          eveniet aspernatur, impedit unde saepe, iusto soluta temporibus
          commodi? Voluptate, nesciunt labore officiis odit quos voluptatem?
          Natus, voluptatem repellendus quaerat nam veritatis harum aperiam
          corporis accusantium nostrum sit ipsa, unde quia odit.
        </p>
      </div>
      <figure className="aboutus__figure">
        <img
          className="image__aboutus"
          src={AboutUsImage}
          alt="about us image"
        />
      </figure>
    </div>
  );
}

export default Aboutus;
