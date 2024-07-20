import React from "react";
import MoviesCard from "../movies/MoviesCard";
import MovieListSlider from "../main/MovieListSlider";

const movies = [
  'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',
  'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider2.jpg',
  'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider3.jpg',
  'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider4.jpg',
  'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',
  'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider2.jpg',
  'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider3.jpg',
  'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider2.jpg',
]

function Home() {
  return (
    <div className="container">
      <div className="pt-8">
        <div className="md:flex gap-8 items-center md:mb-4">
          <h2 className="text-slate300 text-2xl">What`s Popular</h2>
          <ul className="my-6 flex flex-col gap-2 md:flex-row">
            <li className="text-yellow-200">#Streaming</li>
            <li>#On Tv</li>
            <li>#For Rent</li>
            <li>#In Theaters</li>
          </ul>
        </div>
        <MovieListSlider movies={movies}/>
      </div>
      <div className="pt-8">
        <div className="md:flex gap-8 items-center md:mb-4">
          <h2 className="text-slate300 text-2xl">Free To Watch</h2>
          <ul className="my-6 flex flex-col gap-2 md:flex-row">
            <li className="text-yellow-200">#Movie</li>
            <li>#Tv</li>
          </ul>
        </div>
        <MovieListSlider movies={movies}/>
      </div>
    </div>
  );
}

export default Home;
