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

    let home = ['/oneplus/slide1.webp', '/samsung/slide1.webp', '/apple/slide1.jpg', '/apple/slide2.jpg', '/apple/slide4.jpg', '/apple/slide5.jpg', '/watches/slide1.webp', '/watches/slide2.webp', '/watches/slide5.jpg', '/tablets/slide1.jpeg', '/tablets/slide2.jpeg', '/watches/slide6.jpg']

    let samsung = ['/samsung/slide1.webp', '/samsung/slide2.jpg', '/samsung/slide3.jpg', '/samsung/slide4.jpg', '/samsung/slide5.jpg']

    let apple = ['/apple/slide1.jpg', '/apple/slide2.jpg', '/apple/slide3.jpg', '/apple/slide4.jpg', '/apple/slide5.jpg', '/apple/slide6.png', '/apple/slide7.jpg']

    let onePlus = ['/oneplus/slide1.webp', '/oneplus/slide2.jpeg', '/oneplus/slide3.jpeg', '/oneplus/slide4.jpeg', '/oneplus/slide5.jpeg']

    let google = ['/google/slide1.jpg', '/google/slide2.jpg', '/google/slide3.jpg', '/google/slide4.jpg', '/google/slide5.jpg']

    let tablets = ['/tablets/slide1.jpeg', '/tablets/slide2.jpeg', '/tablets/slide3.jpeg', '/tablets/slide4.jpeg', '/tablets/slide5.jpeg', '/tablets/slide6.jpeg']

    let watches = ['/watches/slide1.webp', '/watches/slide2.webp', '/watches/slide3.webp', '/watches/slide4.webp', '/watches/slide5.jpg', '/watches/slide6.jpg', '/watches/slide7.jpg']

    let mobiles = ['/mobiles/slide1.jpg', '/mobiles/slide2.jpg', '/mobiles/slide3.jpg', '/mobiles/slide4.jpg', '/mobiles/slide5.webp', '/mobiles/slide6.jpeg', '/mobiles/slide7.webp', '/mobiles/slide8.jpg',]

    if (pathname === '/') {
        slides = home
    }

    if (pathname === '/category/5391ed58-ca18-4a98-8680-e4ab536456db') {
        slides = tablets;
    }

    if (pathname === '/category/547f618b-6c87-4d1a-96d0-11a85812bae6') {
        slides = watches;
    }

    if (pathname === '/category/efc988c9-da39-41bc-b48c-8d41310b7d10') {
        slides = mobiles;
    }

    if (pathname === '/brand/08a443ba-3788-40d1-a347-6b25a60bb24c') {
        slides = apple;
    }

    if (pathname === '/brand/d18e1474-122f-4cf1-9cb2-9f248618e001') {
        slides = samsung;
    }

    if (pathname === '/brand/79464df5-b66a-40d1-b81c-4f22561d678d') {
        slides = onePlus;
    }

    if (pathname === '/brand/8c79f71f-be01-432f-bb93-c7a0db283723') {
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