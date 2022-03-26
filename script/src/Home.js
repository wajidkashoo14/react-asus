import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import playstore from "./Assets/playstore.png";
import appstore from "./Assets/appstore.png";

function Home() {
  return (
    <div className="home">
      <div className="heading">
        find a best taxi ride in sheffield
        <p className="heading__details">call on 01143450450</p>
      </div>
      <div className="overlay"></div>

      <button type="submit" className="home__btn">
        book a ride
      </button>

      <div className="stores">
        <Link to="/">
          <img className="store__img" src={appstore} alt="playstore" />
        </Link>
        <Link to="/">
          <img className="store__img" src={playstore} alt="appStore" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
