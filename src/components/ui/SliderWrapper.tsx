"use client";

import { Children } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";
import "swiper/css";

export type SwiperBreakPoints = SwiperOptions["breakpoints"];

interface SliderWrapperProps {
  children: React.ReactNode;
  breakPoints: SwiperBreakPoints;
}

export default function SliderWrapper({
  children,
  breakPoints,
}: SliderWrapperProps) {
  return (
    <div>
      <Swiper
        breakpoints={breakPoints}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {Children.map(children, (child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
