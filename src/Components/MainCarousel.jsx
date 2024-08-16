import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

import Button from './Button.jsx';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { homeData } from '../Data/Data.js';


export default function MainCarousel() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Swiper
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                modules={[Autoplay, Pagination, Navigation, EffectCreative]}
                loop={true}
                spaceBetween={30}                
                slidesPerView={1}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
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
                className="w-full h-full"
            >
                {homeData.mainCarousel.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-full">
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                className="w-full h-full object-cover"
                            />
                            <div
                                className={`absolute inset-0 inset-x-12 md:inset-40 flex flex-col justify-center items-center md:items-start text-white p-4 transition-transform duration-500 animate-slideInFromBottom`}
                            >
                                <h2 className="text-3xl 2xl:text-9xl md:text-7xl mb-4 font-bold">{slide.title}</h2>
                                <p className="text-lg 2xl:text-2xl md:text-md mb-6 font-semibold">{slide.description}</p>
                                <Button className="px-4 py-2 text-xs 2xl:px-12 2xl:py-5 md:px-10 md:py-3 2xl:text-xl md:text-lg">Learn More</Button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                {/* Navigation buttons */}
                <Button className="swiper-button-prev absolute top-1/2 left-1 md:left-4 transform -translate-y-1/2 z-10 max-md:p-1">
                    <FaChevronLeft size={25} />
                </Button>
                <Button className="swiper-button-next absolute top-1/2 right-1 md:right-4 transform -translate-y-1/2 z-10 max-md:p-1">
                    <FaChevronRight size={25} />
                </Button>
            </Swiper>
        </div>
    );
}
