import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeftIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";

import { convertNumsInStringToIranian } from "@/utils/numberHelpers";

const topics = ["درسی", "زبان", "هنر", "ورزش", "مهارت", "تکنولوژی"];
const faqs = Array(4).fill("آیا مخ لورم ایپسوم متن ساختگی است؟");
const contactInfo = {
  mail: "info@gajino.com",
  tel: "021-6420",
  address:
    "تهران - کیلومتر 14 جاده مخصوص - بلوار ایران خودرو - نرسیده به فتح - بلاک 2",
  location:
    "https://www.google.com/maps/place/Gajino/@35.7055654,51.181571,17z",
};

export default function Info() {
  return (
    <div className="xl: grid grid-cols-2 lg:grid-cols-4 lg:gap-28 2xl:gap-40">
      <div className="col-span-2 mb-6 lg:col-span-1">
        <Image
          src="logo.svg"
          width={80}
          height={80}
          alt="Logo"
          className="mb-2 h-10 w-10 sm:h-20 sm:w-20 md:mb-6"
        />
        <p className="text-justify sm:text-base">
          مخ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطر آنچنان که لازم است.
        </p>
      </div>

      <div className="col-span-2 mb-8 lg:col-span-1">
        <h5 className="mb-2 text-xs font-bold text-accent-500 sm:text-lg">
          موضوعات
        </h5>
        <ul className="grid grid-cols-2 lg:grid-cols-1">
          {topics.map((topic) => (
            <li key={topic}>
              <Link href="#" className="my-1 flex w-fit items-center pb-1 pl-2">
                <ChevronLeftIcon className="mt-0.5 h-4 w-4 text-primary-600" />
                <span className="sm:text-base"> {topic}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h5 className="mb-2 text-xs font-bold text-accent-500 sm:text-lg">
          سوالات متداول
        </h5>
        <ul className="flex list-inside list-disc flex-col gap-4 text-primary-600">
          {faqs.map((faq, i) => (
            <li key={i}>
              <span className="text-accent-300 sm:text-base">{faq}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h5 className="mb-2 text-xs font-bold text-accent-500 sm:text-lg">
          تماس با ما
        </h5>
        <ul className="flex flex-col gap-4 sm:text-base">
          <li>
            <Link
              href={`mailto:${contactInfo.mail}`}
              className="flex items-center gap-2"
            >
              <EnvelopeIcon className="h-4 w-4 min-w-4 text-primary-600" />
              {contactInfo.mail}
            </Link>
          </li>
          <li>
            <Link
              href={`tel:${contactInfo.tel}`}
              className="flex items-center gap-2"
            >
              <PhoneIcon className="h-4 w-4 min-w-4 text-primary-600" />
              {convertNumsInStringToIranian(contactInfo.tel)}
            </Link>
          </li>
          <li>
            <Link
              href={contactInfo.location}
              target="_blank"
              className="flex items-start gap-2"
            >
              <MapPinIcon className="h-4 w-4 min-w-4 text-primary-600" />
              {convertNumsInStringToIranian(contactInfo.address)}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
