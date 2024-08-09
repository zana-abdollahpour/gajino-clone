import Image from "next/image";

import Card from "@/components/ui/Card";
import { convertToIranianCurrency } from "@/utils/numberHelpers";

import sculptingImage from "./img/sculpting.png";
import guitarImage from "./img/guitar.png";
import basketballImage from "./img/basketball.png";
import discountIcon from "./img/discount.svg";

const discountOffers = [
  {
    title: "12 جلسه آموزش مجسمه سازی",
    teacher: "فرید انصاری فرد",
    img: sculptingImage,
    normaliPrice: 480000,
    withDiscount: 380000,
  },
  {
    title: "8 جلسه آموزش گیتار",
    teacher: "آرمان پیرزاده",
    img: guitarImage,
    normaliPrice: 1200000,
    withDiscount: 950000,
  },
  {
    title: "10 جلسه آموزش بسکتبال",
    teacher: "پژمان نصیری",
    img: basketballImage,
    normaliPrice: 520000,
    withDiscount: 440000,
  },
];

export default function Discounts() {
  return (
    <div className="mx-auto mt-12 hidden w-10/12 grid-cols-3 gap-10 md:grid">
      {discountOffers.map((offer) => (
        <div className="relative w-fit" key={offer.title}>
          <Image
            src={discountIcon}
            className="absolute left-4 top-4 z-10"
            width={36}
            height={36}
            alt="discount"
          />
          <Card src={offer.img} alt={offer.title}>
            <h3 className="mb-1 text-xl font-bold text-accent-500">
              {offer.title}
            </h3>
            <h4 className="mb-5 text-xl text-accent-500">{offer.teacher}</h4>
            <div>
              <span className="mb-2 text-accent-300">
                {convertToIranianCurrency(offer.normaliPrice)} تومان
              </span>
              <div className="h-0.5 w-full -translate-y-3 -rotate-6 scale-x-125 rounded-full bg-red-500/90" />
            </div>
            <span className="text-xl font-bold">
              {convertToIranianCurrency(offer.withDiscount)} تومان
            </span>
          </Card>
        </div>
      ))}
    </div>
  );
}
