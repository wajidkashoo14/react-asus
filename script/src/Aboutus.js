import React from "react";
import "./aboutus.css";
import AboutUsImage from "./Assets/aboutus.jpg";
function Aboutus() {
  return (
    <div className="aboutus">
      <div className="about__info">
        <p className="aboutus-details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          dolore voluptates nulla expedita vel nostrum earum dolores
          necessitatibus eos cupiditate! Sequi blanditiis numquam rem eveniet
          corrupti sint rerum, velit minima magnam quos cumque atque iure
          molestiae possimus sed fugiat eaque ducimus maiores facere
          exercitationem assumenda odio. Iste aliquam suscipit assumenda!
        </p>
      </div>
      <div className="aboutus__img">
        <img
          className="image__aboutus"
          src={AboutUsImage}
          alt="about us image"
        />
      </div>
    </div>
  );
}

export default Aboutus;
