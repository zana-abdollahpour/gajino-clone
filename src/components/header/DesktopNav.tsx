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
      className="text-accent-300 hover:text-accent-500 ml-16 flex h-16 w-auto items-center justify-between gap-4 px-4"
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
  return (
    <Link
      href="#"
      className={`group/category hover:text-accent-500 relative flex items-center justify-between gap-2 font-bold transition-all ${navItem.subTopics.length ? "h-20" : ""}`}
    >
      {navItem.name}
      {navItem.subTopics.length ? (
        <>
          <ChevronDownIcon className="group-hover/category:text-accent-500 h-5 w-5 cursor-pointer rounded-full transition-all group-hover/category:rotate-180" />
          <div className="border-primary-600 absolute right-0 top-full hidden border-t bg-white group-hover/category:block">
            {navItem.subTopics.map((subTopic) => (
              <div
                key={subTopic.category}
                className="text-accent-300 hover:text-accent-500 border-accent-50 h-16 w-48 border-l"
              >
                <button
                  type="button"
                  className="hover:bg-accent-100 hover:bg-accent-50 group/btn block h-full w-full bg-white px-4 text-start transition-all"
                >
                  <Image
                    src={`sub-topics/${subTopic.iconName}.svg`}
                    width={32}
                    height={32}
                    alt={subTopic.iconName}
                    className="group-hover/btn:bg-accent-300/20 ml-2 inline-block rounded-full p-1 transition-all"
                  />
                  {subTopic.category}
                  {subTopic.subCategories.length > 0 && (
                    <div className="border-primary-600 absolute right-full top-[-1px] hidden max-h-[24.5rem] w-[60vw] max-w-[78rem] flex-col flex-wrap content-start border-t bg-white group-hover/btn:flex">
                      {subTopic.subCategories.map((category) => (
                        <SubCategory key={category} category={category} />
                      ))}
                    </div>
                  )}
                </button>
              </div>
            ))}
          </div>
        </>
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
        <Link
          className="hover:text-accent-500 mr-4 min-w-fit text-lg font-bold"
          href="#"
        >
          ورود/ثبت نام
        </Link>
        <CallToAction />
      </div>
    </>
  );
}
