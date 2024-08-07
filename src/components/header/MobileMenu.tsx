import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";

interface Topic {
  name: string;
  subTopics: string[];
}

interface MobileNavItemProps {
  topic: Topic;
}

function MobileNavItem({ topic }: MobileNavItemProps) {
  return (
    <Link
      href="#"
      className="flex items-center justify-between border-b border-gray-200 px-6 py-4 font-bold"
    >
      {topic.name}
      {topic.subTopics.length ? (
        <ChevronLeftIcon className="h-5 w-5 cursor-pointer rounded-full" />
      ) : null}
    </Link>
  );
}

export default function MobileMenu() {
  const topics: Topic[] = [
    { name: "موضوعات", subTopics: ["TODO: add subTopics"] },
    { name: "درباره ما", subTopics: [] },
    { name: "تماس با ما", subTopics: [] },
    { name: "سوالات متداول", subTopics: [] },
  ];

  return (
    <div className="h-full w-[20.5rem] rounded-l-xl bg-white pt-6">
      {topics.map((topic) => (
        <MobileNavItem key={topic.name} topic={topic} />
      ))}

      <Link
        href="#"
        className="bg-primary-600 mr-6 mt-4 block w-fit rounded-lg px-6 py-3 text-lg font-bold text-white"
      >
        معلم خصوصی شو
      </Link>
    </div>
  );
}
