import Image from "next/image";
import Link from "next/link";

import MobileMenu from "./MobileMenu";
import MobileNavButton from "./MobileNavButton";
import DesktopNav from "./DesktopNav";

export interface NavItem {
  name: string;
  subTopics: string[];
}

const navItems: NavItem[] = [
  { name: "موضوعات", subTopics: ["TODO: add subTopics"] },
  { name: "درباره ما", subTopics: [] },
  { name: "تماس با ما", subTopics: [] },
  { name: "سوالات متداول", subTopics: [] },
];

export default function Header() {
  return (
    <header className="sticky top-0 flex h-14 w-full max-w-[120rem] items-center justify-between bg-white p-6 lg:px-24 lg:py-10">
      <MobileNavButton>
        <MobileMenu navItems={navItems} />
      </MobileNavButton>

      <Link href="/">
        <Image
          src="logo.svg"
          width={40}
          height={40}
          alt="home"
          className="lg:h-14 lg:w-14"
        />
      </Link>

      <DesktopNav navItems={navItems} />

      <Image
        src="exit.svg"
        width={24}
        height={24}
        alt="exit"
        className="cursor-pointer lg:hidden"
      />
    </header>
  );
}
