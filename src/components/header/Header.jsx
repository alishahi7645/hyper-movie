import React from "react";
import Navigation from "./Navigation";
import Searchbox from "./Searchbox";
import FollowUs from "./FollowUs";
import Slider from "./Slider";

function Header() {
  return (
    <header>
      <div className="containe">
        <Navigation />
        <Searchbox />
        <FollowUs />
        <Slider />
      </div>
    </header>
  );
}

export default Header;
