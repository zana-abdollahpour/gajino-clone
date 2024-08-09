import Link from "next/link";
import Image from "next/image";

const gajLogoNames = ["dr-iq", "gaj-mag", "gaj", "gaj-market"];
const certificatLogoNames = [
  "senfi",
  "cyndicate",
  "enamad-gold",
  "enamad-blue",
];

export default function LogoContainer() {
  return (
    <div className="flex flex-col gap-16">
      <div className="grid grid-cols-2 gap-x-12 gap-y-10">
        {gajLogoNames.map((logoName) => (
          <Link href="#" key={logoName} className="mx-auto w-fit">
            <Image
              src={`/footer/${logoName}.png`}
              alt="Logo"
              className="mb-2 h-10 w-40"
              width={160}
              height={40}
            />
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-10">
        {certificatLogoNames.map((logoName) => (
          <Link
            href="#"
            key={logoName}
            className="mx-auto w-fit overflow-hidden rounded-full"
          >
            <Image
              src={`/footer/${logoName}.png`}
              alt="Logo"
              className="mb-2 h-24 w-24"
              width={160}
              height={160}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
