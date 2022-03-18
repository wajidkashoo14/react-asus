import React from "react";
import "./aboutus.css";
import AboutUsImage from "./Assets/aboutus.jpg";
function Aboutus() {
  return (
    <div className="aboutus">
      <div className="about__info">
        <h1 className="heading__aboutus">about us</h1>
        <p className="aboutus-details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          dolore voluptates nulla expedita vel nostrum earum dolores
          necessitatibus eos cupiditate! Sequi blanditiis numquam rem eveniet
          corrupti sint rerum, velit minima magnam quos cumque atque iure
          molestiae possimus sed fugiat eaque ducimus maiores facere
          exercitationem assumenda odio. Iste aliquam suscipit assumenda!
        </p>
      </div>

      <img className="image__aboutus" src={AboutUsImage} alt="about us image" />
    </div>
  );
}

export default Aboutus;
