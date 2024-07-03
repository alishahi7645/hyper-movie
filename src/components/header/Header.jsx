import React, { useState } from "react";
import Navigation from "./Navigation";
import Searchbox from "./Searchbox";
import FollowUs from "./FollowUs";
import Slider from "./Slider";


function Header() {
  const [bg , setbg] = useState('/cinema.jpg')
  return (
    <header className="py-4 md:py-8 transition duration-700 bg-contain bg-center" style={{backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 90%), rgb(0 0 0 / 70%), rgb(0 0 0 / 40%)), url('${bg}')`}}>
      <div className="container">
        <Navigation />
        <Searchbox />
        <FollowUs />
        <Slider setbg={setbg}/>
      </div>
    </header>
  );
}

export default Header;
