// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./CustomSwiper.css";

function CustomSwiper(props) {
  return (
    <div className="swiperContainer">
      <p className="swiperHeader">{props.topic}</p>
      <Swiper
        navigation={true}
        spaceBetween={5}
        breakpoints={{
          1378: {
            slidesPerView: 6,
            slidesPerGroup: 5,
          },
          998: {
            slidesPerView: 5,
            slidesPerGroup: 4,
          },
          625: {
            slidesPerView: 4,
            slidesPerGroup: 3,
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 2,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {props.children.map((child) => (
          <SwiperSlide className="swiperSlide">{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CustomSwiper;
