import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";

import CallToAction from "./CallToAction";
import type { NavItem } from "./Header";

interface MobileNavItemProps {
  navItem: NavItem;
}

function MobileNavItem({ navItem }: MobileNavItemProps) {
  return (
    <Link
      href="#"
      className="flex items-center justify-between border-b border-gray-200 px-6 py-4 font-bold"
    >
      {navItem.name}
      {navItem.subTopics.length ? (
        <ChevronLeftIcon className="h-5 w-5 cursor-pointer rounded-full" />
      ) : null}
    </Link>
  );
}

interface MobileMenuProps {
  navItems: NavItem[];
}

export default function MobileMenu({ navItems }: MobileMenuProps) {
  return (
    <nav className="h-full w-[20.5rem] rounded-l-xl bg-white pt-6">
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.name} navItem={navItem} />
      ))}

      <CallToAction />
    </nav>
  );
}
