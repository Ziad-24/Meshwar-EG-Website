"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  "/images/mockups/sc 1.png",
  "/images/mockups/sc2.png",
  "/images/mockups/sc3.png",
  "/images/mockups/sc5.png",
];

const MobileAppPreview: React.FC = () => {
  return (
    <section id="preview" className="py-16 bg-background text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-10">
        Sneak Peek Into Our Mobile App
      </h2>

      <div className="hidden md:block mx-auto px-4">
        <Swiper
          slidesPerView={3}
          spaceBetween={4}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={src}
                  alt={`App Mockup ${index + 1}`}
                  width={1000}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="block md:hidden mx-auto px-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={4}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={src}
                  alt={`App Mockup ${index + 1}`}
                  width={1000}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MobileAppPreview;
