import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function Slider() {
  return (
    <div className="mt-8 mb-12">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        modules={[Autoplay]}
        autoplay={{delay: 2000}}
        loop
      >
        {
          [1,2,3,4].map((number) => (
            <SwiperSlide key={number}>
              <img
              className="w-full"
              src={`http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider${number}.jpg`} alt="" />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}

export default Slider;
