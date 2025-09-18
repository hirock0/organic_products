"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
    const slides = [
        "https://res.cloudinary.com/dqpyp8ii2/image/upload/v1758037824/Facebook_Cover_copy_mieysi.jpg",
        "https://res.cloudinary.com/dqpyp8ii2/image/upload/v1758037824/Facebook_Cover_copy_mieysi.jpg",
        "https://res.cloudinary.com/dqpyp8ii2/image/upload/v1758037824/Facebook_Cover_copy_mieysi.jpg",
    ];

    return (
        <section className="w-full">
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay, Pagination]}
                className="w-full"
            >
                {slides.map((src, index) => (
                    <SwiperSlide key={index} className="relative w-full h-full">
                        <Image
                            src={src}
                            alt={`Banner ${index + 1}`}
                            width={1920}
                            height={600}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Banner;
