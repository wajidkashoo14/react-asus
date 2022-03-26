import React from "react";
import "./aboutus.css";
import AboutUsImage from "./Assets/aboutus.jpg";
function Aboutus() {
  return (
    <div className="aboutus">
      <div className="about__info">
        <h1 className="heading__aboutus">about us</h1>
        <h3 className="heading__secondary">
          let's talk about alpha taxi sheffield
        </h3>

        <div className="aboutus-details">
          <p className="aboutus__primary__heading">
            Alfa Taxis sheffield is a fully licensed taxi operator in sheffield,
            yorkshire. It is authorized by the sheffield city council.
          </p>

          <p className="aboutus__primary__secondary">
            Our ethos is to provide you with a <strong>friendly, safe</strong>{" "}
            and <strong>stream lined </strong> journey. as well as the
            following.
          </p>
          <ul className="aboutus__list">
            <li className="list-items">27/7, 365 days service</li>
            <li className="list-items">
              24 hour telephone booking service via our contact centre
            </li>

            <li className="list-items">A fully automated booking system</li>
            <li className="list-items">
              Ability to make bookings via our APP and website
            </li>
            <li className="list-items">
              Track your journey and make payments online
            </li>
          </ul>
          <p className="aboutus__primary__last">
            So book a ride and let us take care of the rest
          </p>
        </div>
      </div>

      <img className="image__aboutus" src={AboutUsImage} alt="about us " />
    </div>
  );
}

export default Aboutus;
