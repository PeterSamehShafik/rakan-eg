import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

//Navigate import
import Button from '../Button.jsx';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import ImgCard from '../ImgCard.jsx';
import { homeData } from '../../Data/Data.js';

export default function WorkCarousel() {
  return (
    <>
      <div className="relative w-full h-full overflow-hidden my-12 md:my-24">
        <Swiper
          grabCursor={true}
          slidesPerView={3}
          zoom={{ maxRatio: 5 }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 40
            }
          }
          }
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => (
              `<span class="${className} p-2 border border-white"></span>`
            ),
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Pagination, Navigation]}
          className="w-full h-full"
        >
          {homeData.workCarousel.map((slide) => (
            <SwiperSlide key={slide.id}>
              <ImgCard src={slide.src} content={slide.content} />
            </SwiperSlide>
          ))}
          <Button className="swiper-button-prev absolute top-1/2 left-1 md:left-4 transform -translate-y-1/2 z-10 max-md:p-1">
            <FaChevronLeft size={25} />
          </Button>
          <Button className="swiper-button-next absolute top-1/2 right-1 md:right-4 transform -translate-y-1/2 z-10 max-md:p-1">
            <FaChevronRight size={25} />
          </Button>
        </Swiper>
      </div >
    </>
  );
}
