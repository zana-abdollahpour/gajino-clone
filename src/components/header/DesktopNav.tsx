import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

import CallToAction from "./CallToAction";
import type { NavItem } from "./Header";

interface DesktopNavItemProps {
  navItem: NavItem;
}

function DesktopNavItem({ navItem }: DesktopNavItemProps) {
  return (
    <Link
      href="#"
      className="flex items-center justify-between gap-2 font-bold"
    >
      {navItem.name}
      {navItem.subTopics.length ? (
        <ChevronDownIcon className="h-5 w-5 cursor-pointer rounded-full" />
      ) : null}
    </Link>
  );
}

interface DesktopNavProps {
  navItems: NavItem[];
}

export default function DesktopNav({ navItems }: DesktopNavProps) {
  return (
    <>
      <nav className="ml-auto mr-20 hidden gap-10 lg:flex">
        {navItems.map((navItem) => (
          <DesktopNavItem key={navItem.name} navItem={navItem} />
        ))}
      </nav>

      <div className="hidden items-center gap-1 lg:flex">
        <Link className="mr-4 min-w-fit text-lg font-bold" href="#">
          ورود/ثبت نام
        </Link>
        <CallToAction />
      </div>
    </>
  );
}
