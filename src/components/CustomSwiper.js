// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./CustomSwiper.css";
import { useEffect, useState } from "react";
import useSizeChanged from "../hooks/use-size";

function CustomSwiper(props) {
  //workaround for rerendering when window size changes, 
  //otherwise swiper has problems with getting right amounts of slides when
  //going from small screen to big screen (shows only 1 slide)
  useSizeChanged();

  return (
    <div className="swiperContainer">
      <p className="swiperHeader">{props.topic}</p>
      <Swiper
        className="swiper"
        navigation={true}
        breakpoints={{
          1378: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          998: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          625: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        preventClicksPropagation={true}
        preventClicks={true}
        slideToClickedSlide={false}
        loop={true}
        modules={[Navigation]}
      >
        {props.children.map((child) => (
          <SwiperSlide key={child.key} className="swiperSlide">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CustomSwiper;
