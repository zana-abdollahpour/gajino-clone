import SliderWrapper from "@/components/ui/SliderWrapper";
import Card from "@/components/ui/Card";
import type { SwiperBreakPoints } from "@/components/ui/SliderWrapper";

import programmingImage from "./img/programming.png";
import confectioneryImage from "./img/confectionery.png";
import voiceoverImage from "./img/voiceover.png";
import sketchingImage from "./img/sketching.png";

const moreCategories = [
  { name: "برنامه نویسی", image: programmingImage },
  { name: "شیرینی پزی", image: confectioneryImage },
  { name: "گویندگی", image: voiceoverImage },
  { name: "نقاشی سیاه قلم", image: sketchingImage },
];

const breakPoints: SwiperBreakPoints = {
  375: { spaceBetween: 6, slidesPerView: 2.2 },
  768: { spaceBetween: 9, slidesPerView: 3.2 },
  1024: { spaceBetween: 12, slidesPerView: 4 },
};

export default function MoreCategories() {
  return (
    <div className="mr-auto w-11/12">
      <SliderWrapper breakPoints={breakPoints}>
        {moreCategories.map((category, i) => (
          <div
            key={category.name}
            className={`max-w-72 ${i % 2 === 0 ? "sm:-translate-y-12" : "sm:translate-y-20"} sm:pb-20 sm:pt-12`}
          >
            <Card src={category.image} alt={category.name}>
              <span className="inline-block py-4 text-accent-500">
                {category.name}
              </span>
            </Card>
          </div>
        ))}
      </SliderWrapper>
    </div>
  );
}
