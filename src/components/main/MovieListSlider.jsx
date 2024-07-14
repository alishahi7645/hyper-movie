import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import MoviesCard from "../movies/MoviesCard";

function MovieListSlider({ movies }) {
  function getImage(number) {
    return `http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider${number}.jpg`;
  }
  return (
    <Swiper
      breakpoints={{
        1024: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
      }}
      spaceBetween={20}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      centeredSlides
      loop
    >
      {movies.map((img) => (
        <SwiperSlide key={img}>
          {/* <img
              onMouseOver={(e) => setbg(getImage(number))}
              className="w-full rounded"
              src={getImage(number)}
              alt=""
            /> */}
          <MoviesCard img={img}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MovieListSlider;
