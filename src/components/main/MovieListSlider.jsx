import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function MovieListSlider() {
  function getImage(number) {
    return `http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider${number}.jpg`;
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
          },
        }}
        spaceBetween={20}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        loop
      >
        {[1, 2, 3, 4].map((number) => (
          <SwiperSlide key={number}>
            <img
              onMouseOver={(e) => setbg(getImage(number))}
              className="w-full rounded"
              src={getImage(number)}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MovieListSlider;
