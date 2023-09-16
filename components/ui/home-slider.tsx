"use client"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";
import { usePathname } from "next/navigation";

const HomeSlider = () => {
    const pathname = usePathname();
    let slides: string[] = []

    let home = ['/slider1.jpg', '/slider2.jpg', '/slider3.jpg', '/slider4.jpg']
    let samsung = ['/slider1.jpg', '/slider1.jpg', '/slider1.jpg']
    let apple = ['/slider3.jpg', '/slider3.jpg', '/slider3.jpg']
    let onePlus = ['/slider3.jpg', '/slider3.jpg', '/slider3.jpg']
    let google = ['/slider3.jpg', '/slider3.jpg', '/slider3.jpg']
    let laptops = ['/slider2.jpg', '/slider2.jpg', '/slider2.jpg']
    let watches = ['/wallpaper1.png', '/wallpaper1.png', '/wallpaper1.png']
    let mobiles = ['/slider1.jpg', '/slider1.jpg', '/slider1.jpg']

    if (pathname === '/') {
        slides = home
    }

    if (pathname === '/category/d4dcc271-a84c-4b1b-820a-fcc7b37798d7') {
        slides = laptops;
    }

    if (pathname === '/category/f6e77843-7486-42cc-bda4-6c80987765e6') {
        slides = watches;
    }

    if (pathname === '/category/b9884b41-7063-4cad-aa83-5ebaa931ca13') {
        slides = mobiles;
    }

    if (pathname === '/brand/8082316d-a38b-454d-af9e-ccb17218c8e8') {
        slides = apple;
    }

    if (pathname === '/brand/2163c331-6922-4ecd-81a6-10aaabe0fb64') {
        slides = samsung;
    }

    if (pathname === '/brand/5f60824a-537c-47e5-973c-b9535509bebf') {
        slides = onePlus;
    }

    if (pathname === '/brand/5be8b8ba-c116-4256-b5b9-81c1e7367fc1') {
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
    )
}

export default HomeSlider