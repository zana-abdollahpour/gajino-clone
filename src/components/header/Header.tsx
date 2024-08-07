import Image from "next/image";
import Link from "next/link";

import MobileMenu from "./MobileMenu";
import MobileNavButton from "./MobileNavButton";

export default function Header() {
  return (
    <header className="sticky top-0 flex h-14 w-full max-w-[120rem] items-center justify-between bg-white p-6">
      <MobileNavButton>
        <MobileMenu />
      </MobileNavButton>

      <Link href="/">
        <Image src="logo.svg" width={40} height={40} alt="home" />
      </Link>

      <Image
        src="exit.svg"
        width={24}
        height={24}
        alt="exit"
        className="cursor-pointer"
      />
    </header>
  );
}
