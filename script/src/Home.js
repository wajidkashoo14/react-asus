import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="heading">
        find a best taxi ride
        <p className="heading__details">
          call on <span>01143450450</span>
        </p>
      </div>
      <div className="overlay"></div>
      <button type="submit" className="home__btn">
        book a ride
      </button>
    </div>
  );
}

export default Home;
