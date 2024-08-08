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
      className={`w-full overflow-hidden rounded-xl bg-white ${imageType === "circular" ? "w-[21.25rem]" : "min-w-[9.75rem] max-w-[28.75rem]"}`}
    >
      <div
        className={`relative bg-green-300 ${imageType === "circular" ? "shadow-base mx-auto mt-8 h-44 w-44 overflow-hidden rounded-full" : "max-h-64 w-full"}`}
      >
        <Image
          src={src}
          alt={alt}
          className={`${imageType === "circular" ? "object-cover" : ""}`}
          fill={imageType === "circular"}
        />
      </div>
      <div className="flex flex-col items-center justify-center px-4 py-1 md:py-6">
        {children}
      </div>
    </div>
  );
}
