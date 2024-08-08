import SliderWrapper from "@/components/ui/SliderWrapper";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import type { SwiperBreakPoints } from "@/components/ui/SliderWrapper";

import Slides from "./Slides";

const breakPoints: SwiperBreakPoints = {
  375: { spaceBetween: 6, slidesPerView: 2.2 },
  768: { spaceBetween: 9, slidesPerView: 2.6 },
  1024: { spaceBetween: 12, slidesPerView: 3.4 },
};

export default function TopTeachers() {
  return (
    <div className="mr-auto w-11/12 sm:grid sm:grid-cols-6 lg:grid-cols-12">
      <div className="mx-auto mb-8 max-w-72 text-center sm:col-span-2 sm:pl-16 sm:pt-1 sm:text-start lg:col-span-3">
        <h3 className="mb-3 text-xl font-bold text-accent-500">
          برترین مدرسین
        </h3>
        <p className="text-xs font-bold text-accent-300">
          رتبه مدرسین بر اساس امتیازی است که فراگیران بعد از هر جلسه به کلاس خود
          میدهند (مثلا)
        </p>
        <div className="mt-7 hidden gap-10 text-white sm:flex">
          <div className="h-12 w-12 rounded-2xl bg-primary-600">
            <ChevronRightIcon />
          </div>
          <div className="h-12 w-12 rounded-2xl bg-[#B9B2C2]">
            <ChevronLeftIcon />
          </div>
        </div>
      </div>
      <div className="shadow-large sm:col-span-4 lg:col-span-9">
        <SliderWrapper breakPoints={breakPoints}>
          <Slides />
        </SliderWrapper>
      </div>
    </div>
  );
}
