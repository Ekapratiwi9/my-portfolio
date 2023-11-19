import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ProjectSlider = ({ projects }) => {
  return (
    <div className="w-1/2 mx-3">
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
      >
        {projects.image.map((item) => (
          <SwiperSlide>
            <img
              src={item.img}
              className="mx-auto h-full items-center lg:h-screen object-contain"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
