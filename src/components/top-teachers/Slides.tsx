import Card from "@/components/ui/Card";

import alirezaImage from "./img/alireza-m.png";
import bahramImage from "./img/bahram-mr.png";
import minaImage from "./img/mina-jzh.png";
import pezhmanImage from "./img/pezhman-n.png";
import { ChevronRightIcon, StarIcon } from "@heroicons/react/16/solid";
import { convertToIranianNumber } from "@/utils/numberHelpers";

const topTeachers = [
  {
    name: "مینا جعفری زاده همدانی",
    field: "زبان انگلیسی",
    image: minaImage,
    score: 4.2,
    votes: 586,
  },
  {
    name: "بهرام موسوی راد",
    field: "ادبیات فارسی",
    image: bahramImage,
    score: 4.2,
    votes: 586,
  },
  {
    name: "علیرضا محمدیان",
    field: "زبان آلمانی",
    image: alirezaImage,
    score: 4.2,
    votes: 586,
  },
  {
    name: "پژمان نصیری",
    field: "بسکتبال",
    image: pezhmanImage,
    score: 4.2,
    votes: 586,
  },
];

export default function Slides() {
  return (
    <>
      {topTeachers.map((teacher) => (
        <div key={teacher.name} className="shadow-large">
          <Card src={teacher.image} alt={teacher.name} imageType="circular">
            <div className="flex flex-col items-center gap-3 text-center text-accent-300">
              <h3 className="font-bold text-accent-500">{teacher.name}</h3>
              <h4>{teacher.field}</h4>
              <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-primary-600/20 via-primary-600 to-primary-600/20" />
              <div className="flex items-center">
                <StarIcon className="ml-1 h-5 w-5 fill-[#FFB820]" />
                <span className="">
                  {convertToIranianNumber(teacher.score)}
                </span>
                <div className="mx-3 h-4 w-[1px] bg-accent-300" />
                <span>
                  از<span> {convertToIranianNumber(teacher.votes)} </span>نفر
                </span>
              </div>
              <ChevronRightIcon className="mb-4 mt-2 h-7 w-7 text-primary-600" />
            </div>
          </Card>
        </div>
      ))}
    </>
  );
}
