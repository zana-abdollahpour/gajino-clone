import Image from "next/image";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/16/solid";

import heroBg from "./hero-bg.png";

export default function Hero() {
  return (
    <>
      <div className="absolute right-0 top-14 -z-10 h-56 w-screen">
        <Image src={heroBg} alt="background" className="h-full w-full" />
      </div>

      <section>
        <div className="w-full text-center">
          <h1 className="mb-4 text-xl font-bold text-white">
            دنبال یاد گرفتن چی با کی هستی؟
          </h1>

          <form className="flex flex-col gap-5 rounded-xl bg-white px-4 py-6 text-sm">
            <label className="relative flex">
              <MagnifyingGlassIcon className="absolute right-3 top-2 h-6 w-6 origin-bottom" />
              <input
                title="query"
                type="text"
                placeholder="نام درس، مدرس و ..."
                className="h-10 w-full rounded-lg bg-gray-200 px-10"
              />
            </label>
            <label className="relative flex">
              <MapPinIcon className="absolute right-3 top-2 h-6 w-6 origin-bottom" />
              <input
                title="city"
                type="text"
                placeholder="شهر"
                className="h-10 w-full rounded-lg bg-gray-200 px-10"
              />
            </label>
            <button
              type="submit"
              className="h-10 w-full rounded-lg bg-primary-600 font-bold text-white"
            >
              جستجو
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
