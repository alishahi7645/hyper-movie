import React from "react";
import Navigation from "./Navigation";
import Searchbox from "./Searchbox";
import FollowUs from "./FollowUs";
import Slider from "./Slider";


function Header() {
  return (
    <header className="py-8" style={{backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 90%), rgb(0 0 0 / 70%), rgb(0 0 0 / 40%)), url('/cinema.jpg')`}}>
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
