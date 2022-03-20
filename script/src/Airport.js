import React from "react";
import "./airports.css";

function Airport({ airportname, price }) {
  return (
    <div className="airport">
      <h2 className="airport__heading">{airportname}</h2>
      <p className="airport__price">{price}</p>
    </div>
  );
}

export default Airport;
