import React, { useState } from "react";
import Navigation from "./Navigation";
import Searchbox from "./Searchbox";
import FollowUs from "./FollowUs";
import Slider from "./Slider";
import { useLocation } from "react-router-dom";

function Header() {
  const [bg, setbg] = useState("/cinema.jpg");

  const locaition = useLocation();
  return (
    <header
      className={`py-4 md:py-8 transition duration-700 bg-contain bg-center ${
        locaition.pathname != "/" ? "h-[500px]" : ""
      }`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 90%), rgb(0 0 0 / 70%), rgb(0 0 0 / 40%)), url('${bg}')`,
      }}
    >
      <div className="container">
        <Navigation />
        <Searchbox />
        <div className={`${locaition.pathname != "/" ? "hidden" : ""}`}>
          <FollowUs />
          <Slider setbg={setbg} />
        </div>
      </div>
    </header>
  );
}

export default Header;
