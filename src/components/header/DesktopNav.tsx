import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/16/solid";

import CallToAction from "./CallToAction";
import type { NavItem } from "./Header";

interface SubCategoryProps {
  category: string;
}

function SubCategory({ category }: SubCategoryProps) {
  return (
    <Link
      href="#"
      className="ml-16 flex h-16 w-auto items-center justify-between gap-4 px-4 text-accent-300 hover:text-accent-500"
    >
      {category}
      <ChevronLeftIcon className="h-6 w-6" />
    </Link>
  );
}

interface DesktopNavItemProps {
  navItem: NavItem;
}

function DesktopNavItem({ navItem }: DesktopNavItemProps) {
  if (!navItem.subTopics.length)
    return (
      <Link
        href="#"
        className="group/category gap-2bg-blue-300 relative flex h-fit items-center justify-between p-1 font-bold transition-all hover:text-accent-500"
      >
        {navItem.name}
      </Link>
    );

  return (
    <div className="group/category relative flex h-20 cursor-pointer items-center justify-between gap-2 font-bold transition-all hover:text-accent-500">
      {navItem.name}
      <ChevronDownIcon className="h-5 w-5 cursor-pointer rounded-full transition-all group-hover/category:rotate-180 group-hover/category:text-accent-500" />
      <div className="absolute right-0 top-full hidden border-t border-primary-600 bg-white group-hover/category:block">
        {navItem.subTopics.map((subTopic) => (
          <div
            key={subTopic.category}
            className="h-16 w-48 border-l border-accent-50 text-accent-300 hover:text-accent-500"
          >
            <button
              type="button"
              className="hover:bg-accent-100 group/btn block h-full w-full px-4 text-start transition-all hover:bg-accent-50"
            >
              <Image
                src={`sub-topics/${subTopic.iconName}.svg`}
                width={32}
                height={32}
                alt={subTopic.iconName}
                className="ml-2 inline-block rounded-full p-1 transition-all group-hover/btn:bg-accent-300/20"
              />
              {subTopic.category}
              {subTopic.subCategories.length > 0 && (
                <div className="absolute right-full top-[-1px] hidden max-h-[24.5rem] w-[60vw] max-w-[78rem] flex-col flex-wrap content-start border-t border-primary-600 bg-white group-hover/btn:flex">
                  {subTopic.subCategories.map((category) => (
                    <SubCategory key={category} category={category} />
                  ))}
                </div>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

interface DesktopNavProps {
  navItems: NavItem[];
}

export default function DesktopNav({ navItems }: DesktopNavProps) {
  return (
    <>
      <nav className="ml-auto mr-20 hidden items-center gap-10 lg:flex">
        {navItems.map((navItem) => (
          <DesktopNavItem key={navItem.name} navItem={navItem} />
        ))}
      </nav>

      <div className="hidden items-center gap-1 lg:flex">
        <Link
          className="mr-4 min-w-fit text-lg font-bold hover:text-accent-500"
          href="#"
        >
          ورود/ثبت نام
        </Link>
        <CallToAction />
      </div>
    </>
  );
}
