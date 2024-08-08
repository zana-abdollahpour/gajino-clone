import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

import Card from "@/components/ui/Card";
import { convertToIranianNumber } from "@/utils/numberHelpers";

import basketballImg from "./img/basketball.png";
import guitarImg from "./img/guitar.png";
import sculptingImg from "./img/sculpting.png";
import frenchImg from "./img/french.png";
import drawingImg from "./img/drawing.png";

const courses = [
  {
    title: "آموزش بسکتبال",
    numSessions: 10,
    teacher: "پژمان نصیری",
    img: basketballImg,
    href: "#",
  },
  {
    title: "آموزش گیتار",
    numSessions: 8,
    teacher: "آرمان پیرزاده",
    img: guitarImg,
    href: "#",
  },
  {
    title: "آموزش مجسمه سازی",
    numSessions: 12,
    teacher: "فرید انصاری فرد",
    img: sculptingImg,
    href: "#",
  },
  {
    title: "آموزش زبان فرانسوی",
    numSessions: 8,
    teacher: "مارال صفاری نژاد",
    img: frenchImg,
    href: "#",
  },
  {
    title: "آموزش نقاشی کودکان",
    numSessions: 8,
    teacher: "مونا سعیدی پور",
    img: drawingImg,
    href: "#",
  },
];

export default function Courses() {
  /* TODO: replace this solution later with a proper one via css grid */
  const allVideos = (
    <div className="mx-auto flex h-full flex-col items-center justify-center">
      <div className="relative mb-3 mt-8 text-5xl font-bold text-accent-500">
        <span>{convertToIranianNumber(218)}+</span>
        <div className="absolute bottom-1 right-1/2 h-1 w-48 translate-x-1/2 rounded-full bg-primary-600" />
      </div>
      <h3 className="text-xl text-accent-500">ویدئو با موضوعات مختلف</h3>
      <Link
        href="#"
        className="mx-auto my-12 flex w-52 items-center justify-center gap-0.5 rounded-xl bg-primary-600 px-4 py-2 text-white"
      >
        <ChevronRightIcon className="h-8 w-8" />
        <span>مشاهده تمام ویدئوها</span>
      </Link>
    </div>
  );

  return (
    <section className="mx-auto w-full bg-white">
      <div className="mx-auto w-10/12 text-center">
        <h2 className="my-12 text-xl font-bold text-accent-500">
          برترین ویدئوهای آموزشی
        </h2>
        <div className="shadow-large flex gap-2 overflow-x-scroll py-3 md:flex-row-reverse md:flex-wrap">
          {courses.map((course) => (
            <div
              key={course.title}
              className="shadow-large h-full rounded-xl md:w-[32%]"
            >
              <Card src={course.img} alt={course.title}>
                <div className="mt-1.5 flex w-full flex-col items-start justify-between gap-1.5 text-start text-accent-500">
                  <span className="text-xs">
                    {convertToIranianNumber(course.numSessions)} جلسه
                  </span>
                  <h4 className="font-bold">{course.title}</h4>
                  <h5 className="text-sm">{course.teacher}</h5>
                  <Link
                    href="#"
                    className="mt-3 flex items-center justify-start justify-self-end text-sm text-primary-600"
                  >
                    <ChevronRightIcon className="h-6 w-6" />
                    <span>مشاهده ویدئوها</span>
                  </Link>
                </div>
              </Card>
            </div>
          ))}
          <div className="hidden grow md:block">{allVideos}</div>
        </div>
        <div className="md:hidden">{allVideos}</div>
      </div>
    </section>
  );
}
