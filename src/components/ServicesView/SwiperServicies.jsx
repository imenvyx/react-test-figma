/* eslint-disable import/no-unresolved */
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper-styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import ServiceCard from "./ServiceCard";
function SwiperServicies() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "•" + "</span>";
    },
  };
  return (
    <Swiper
      navigation={true}
      pagination={pagination}
      slidesPerView={2}
      modules={[Pagination, Navigation]}
      className="swiper-servicies"
    >
      <SwiperSlide>
        <ServiceCard />
      </SwiperSlide>
      <SwiperSlide>
        <ServiceCard />
      </SwiperSlide>
      <SwiperSlide>
        <ServiceCard />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperServicies;
