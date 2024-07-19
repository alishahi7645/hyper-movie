import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import MoviesCard from "../movies/MoviesCard";
import axios from "axios";

function Slider({setbg}) {

  const [movies , setMovies] = useState([])

  async function loadMovies() {
    const {data} = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=2d65b06dcf682524c5198a666426664c')

    setMovies(data.results)
  }

  useEffect(()=>{
    loadMovies();
  },[])

  function getImage(number){
    return `http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider${number}.jpg`
  }
  return (
    <div className="mt-8 mb-12">
      <Swiper
        breakpoints={{
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          }
        }}
        spaceBetween={20}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{delay: 2000}}
        loop
      >
        {
          movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div  onMouseOver={(e) => setbg(`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`)}>
                <MoviesCard title={movie.title} rate={movie.vote_average} img={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}/>
              </div>
            </SwiperSlide>
          ))
          
        }
      </Swiper>
    </div>
  );
}

export default Slider;
