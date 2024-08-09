import Image from "next/image";
import type { ImageProps } from "next/image";

interface CardProps {
  src: ImageProps["src"];
  alt: string;
  imageType?: "rectangular" | "circular";
  children: React.ReactNode;
}

export default function Card({
  src,
  alt,
  children,
  imageType = "rectangular",
}: CardProps) {
  return (
    <div
      className={`h-full w-full overflow-hidden rounded-xl bg-white ${imageType === "circular" ? "min-w-[9.75rem] max-w-[21.25rem]" : "min-w-[9.75rem] max-w-[28.75rem]"}`}
    >
      <div
        className={`relative ${imageType === "circular" ? "mx-auto mt-8 aspect-square w-14 overflow-hidden rounded-full shadow-base sm:w-44" : "max-h-64 w-full after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-accent-800/30 after:content-['']"}`}
      >
        <Image
          src={src}
          alt={alt}
          className={`${imageType === "circular" ? "object-cover" : ""}`}
          placeholder="blur"
          fill={imageType === "circular"}
        />
      </div>
      <div className="flex flex-col items-center justify-center px-4 py-1 md:py-6">
        {children}
      </div>
    </div>
  );
}
