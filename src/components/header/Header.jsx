import React from "react";
import Navigation from "./Navigation";
import Searchbox from "./Searchbox";
import FollowUs from "./FollowUs";
import Slider from "./Slider";

function Header() {
  return (
    <header style={{backgroundImage: '/images/cinema.jpg'}}>
      <div className="container">
        <Navigation />
        <Searchbox />
        <FollowUs />
        <Slider />
      </div>
    </header>
  );
}

export default Header;
