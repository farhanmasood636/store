"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";
import { usePathname } from "next/navigation";

const HomeSlider = () => {
  const pathname = usePathname();
  let slides: string[] = [];

  let home = [
    "/homeSlider/slide1.jpeg",
    "/homeSlider/slide2.jpeg",
    "/homeSlider/slide3.jpeg",
    "/homeSlider/slide4.webp",
    "/homeSlider/slide5.jpeg",
    "/homeSlider/slide6.png",
    "/homeSlider/slide7.jpeg",
    "/homeSlider/slide8.jpeg",
    "/homeSlider/slide9.jpeg",
    "/homeSlider/slide10.jpeg",
  ];

  let samsung = [
    "/samsung/slide1.webp",
    "/samsung/slide2.jpg",
    "/samsung/slide3.jpg",
    "/samsung/slide4.jpg",
    "/samsung/slide5.jpg",
  ];

  let apple = [
    "/apple/slide2.jpeg",
    "/apple/slide3.jpg",
    "/apple/slide4.jpg",
    "/apple/slide5.jpeg",
    "/apple/slide6.png",
    "/apple/slide7.jpg",
  ];

  let onePlus = [
    "/oneplus/slide1.webp",
    "/oneplus/slide2.jpeg",
    "/oneplus/slide3.jpeg",
    "/oneplus/slide4.jpeg",
    "/oneplus/slide5.jpeg",
  ];

  let google = [
    "/google/slide1.jpg",
    "/google/slide2.jpg",
    "/google/slide3.jpg",
    "/google/slide4.jpg",
    "/google/slide5.jpg",
  ];

  let tablets = [
    "/tablets/slide1.jpeg",
    "/tablets/slide2.jpeg",
    "/tablets/slide3.jpeg",
    "/tablets/slide4.jpeg",
    "/tablets/slide5.jpeg",
    "/tablets/slide6.jpeg",
  ];

  let watches = [
    "/watches/slide1.webp",
    "/watches/slide2.webp",
    "/watches/slide3.webp",
    "/watches/slide4.webp",
    "/watches/slide5.jpg",
    "/watches/slide6.jpg",
    "/watches/slide7.jpg",
  ];

  let mobiles = [
    "/mobiles/slide1.jpg",
    "/mobiles/slide2.jpg",
    "/mobiles/slide3.jpg",
    "/mobiles/slide4.jpg",
    "/mobiles/slide7.webp",
    "/mobiles/slide8.jpg",
  ];

  let laptops = [
    "/laptops/slide1.jpeg",
    "/laptops/slide2.jpeg",
    "/laptops/slide3.jpeg",
    "/laptops/slide4.jpeg",
  ];

  if (pathname === "/") {
    slides = home;
  }

  if (pathname === "/category/6fc78bac-4719-4285-a526-6f036d2bf8b4") {
    slides = tablets;
  }

  if (pathname === "/category/b2a838db-3b42-4238-9d9d-70727b8049ac") {
    slides = watches;
  }

  if (pathname === "/category/66752904-6bd8-4c40-91f7-1e308ab90f1e") {
    slides = mobiles;
  }

  if (pathname === "/category/047769e5-ea41-4273-b2a0-d6df18fd8b4a") {
    slides = laptops;
  }

  if (pathname === "/brand/295c3fc5-7da7-4493-8e89-64dcae82af01") {
    slides = apple;
  }

  if (pathname === "/brand/388b0f8d-4c59-40ed-a5ef-07c160b55a7f") {
    slides = samsung;
  }

  if (pathname === "/brand/b17d66cd-4c91-49a0-a706-bd2ce9368902") {
    slides = onePlus;
  }

  if (pathname === "/brand/69c8439d-f3a1-4598-b011-638cdafaa5bb") {
    slides = google;
  }

  return (
    <div className="mt-10 m-5">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              className=" rounded-3xl h-[600px] max-lg:h-[400px] max-sm:h-[300px]"
              src={slide}
              alt="image slide 1"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
