import React from "react";
import "./airports.css";
import Airport from "./Airport";
import Arrivals from "./Assets/arrivals.jpg";

function Airports() {
  return (
    <div className="airports">
      <h1 className="airports__primary__heading">
        airport transfer taxi service
      </h1>
      <div className="airports__info">
        <div className="airports__image">
          <img src={Arrivals} className="airport__image" alt="airport" />
        </div>
        <div className="airports__details">
          <Airport
            airportname="Heathrow Airport"
            price=" £250 one way plus drop off fee"
          />
          <Airport
            airportname="Doncaster Sheffield Airport"
            price="£80 one way plus drop off fee"
          />
          <Airport
            airportname="East Midlands Airport"
            price="£80 one way plus drop off fee"
          />
          <Airport
            airportname="Manchester Airport"
            price="£80 one way plus drop off fee"
          />
          <Airport
            airportname="Birmingham Airport "
            price="£80 one way plus drop off fee"
          />
          <Airport
            airportname="Leeds and Bradford Airport"
            price="£80 one way plus drop off fee"
          />
        </div>
      </div>
    </div>
  );
}

export default Airports;
