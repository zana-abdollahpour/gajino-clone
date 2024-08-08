import Image from "next/image";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/16/solid";

import heroBg from "./hero-bg.png";

export default function Hero() {
  return (
    <section>
      <div className="absolute right-1/2 top-14 -z-10 h-56 w-screen max-w-[120rem] translate-x-1/2 sm:h-96 md:h-[28rem] lg:h-[32rem] xl:h-[38rem]">
        <Image
          src={heroBg}
          alt="background"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-full text-center">
        <h1 className="mb-4 text-xl font-bold text-white md:text-2xl xl:text-4xl">
          دنبال یاد گرفتن چی با کی هستی؟
        </h1>

        <form className="flex flex-col gap-5 rounded-xl bg-white px-4 py-6 text-sm md:flex-row md:gap-0 lg:py-8">
          <label className="relative flex grow">
            <MagnifyingGlassIcon className="absolute right-3 top-2 h-6 w-6 origin-bottom" />
            <input
              title="query"
              type="text"
              placeholder="نام درس، مدرس و ..."
              className="h-10 w-full rounded-lg bg-gray-200 px-10 md:rounded-l-none md:border-l md:border-gray-300"
            />
          </label>
          <label className="relative flex grow md:ml-6">
            <MapPinIcon className="absolute right-3 top-2 h-6 w-6 origin-bottom" />
            <input
              title="city"
              type="text"
              placeholder="شهر"
              className="h-10 w-full rounded-lg bg-gray-200 px-10 md:rounded-r-none"
            />
          </label>
          <button
            type="submit"
            className="h-10 w-full rounded-lg bg-primary-600 font-bold text-white md:w-48"
          >
            جستجو
          </button>
        </form>
      </div>
    </section>
  );
}
