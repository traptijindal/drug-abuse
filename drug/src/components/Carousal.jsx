import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../CSS/Carousel.css"

const Carousal = () => {
  return (
    <>
      <div className="main-carousel -z-1">
        <Swiper
          //   spaceBetween={}
          slidesPerView={1}
          // centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            // disableOnInteraction: false,
          }}

          cssMode={true}
          sticky={false}
          freeMode={{ enable: true }}
          mousewheel={{
            mousewheel: true,
          }}
          // navigation={true}
          breakpoints={{
            0: {
              slidesPerView: 1,

            },
            640: {
              slidesPerView: 1,
            },
          }}
          modules={[Autoplay, Pagination, Navigation, Mousewheel]}
        >
          <SwiperSlide>
            <img className=" w-full height" src="\images\anti-smoking-and-consumption-and-mental-illness-landscape-.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=" w-full height" src="\images\WhatsApp Image 2024-02-03 at 8.43.59 PM.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=" w-full height" src="\images\c_3.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=" w-full height" src="\images\anti-smoking-and-consumption-and-mental-illness-landscape-dark-theme.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=" w-full height" src="\images\c_7.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Carousal