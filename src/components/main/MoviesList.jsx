import React from "react";
import MoviesCard from "../movies/MoviesCard";

function MoviesList() {
  return (
    <div className="container">
      <div className="py-8 columns-6">
        <MoviesCard img='http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg' />
        <MoviesCard img='http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider2.jpg' />
        <MoviesCard img='http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider3.jpg'/>
        <MoviesCard img='http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider4.jpg'/>
        <MoviesCard img='http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider4.jpg'/>
        <MoviesCard img='http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider4.jpg'/>
      </div>
    </div>
  );
}

export default MoviesList;
