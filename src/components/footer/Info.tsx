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
    <div>
      <div className="mb-6">
        <Image
          src="logo.svg"
          width={80}
          height={80}
          alt="Logo"
          className="mb-2 h-10 w-10 md:h-20 md:w-20"
        />
        <p>
          مخ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است.
        </p>
      </div>

      <div className="mb-8">
        <h5 className="mb-2 text-xs font-bold">موضوعات</h5>
        <ul className="grid grid-cols-2">
          {topics.map((topic) => (
            <li key={topic}>
              <Link href="#" className="my-1 flex w-fit items-center pb-1 pl-2">
                <ChevronLeftIcon className="mt-0.5 h-4 w-4 text-primary-600" />
                {topic}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4">
        <div className="shrink-0 grow">
          <h5 className="mb-2 text-xs font-bold">سوالات متداول</h5>
          <ul className="flex list-inside list-disc flex-col gap-4 text-primary-600">
            {faqs.map((faq, i) => (
              <li key={i}>
                <span className="text-accent-500">{faq}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="shrink grow-0">
          <h5 className="mb-2 text-xs font-bold">تماس با ما</h5>
          <ul className="flex flex-col gap-4">
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
    </div>
  );
}
