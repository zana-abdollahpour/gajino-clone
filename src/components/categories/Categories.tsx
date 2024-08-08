import Link from "next/link";

import Card from "@/components/ui/Card";

import artImg from "./img/art.png";
import eduImg from "./img/edu.png";
import langImg from "./img/lang.png";
import skillImg from "./img/skill.png";
import sportImg from "./img/sport.png";
import techImg from "./img/tech.png";

const categories = [
  { name: "مهارت", img: skillImg },
  { name: "درسی", img: eduImg },
  { name: "تکنولوژی", img: techImg },
  { name: "زبان", img: langImg },
  { name: "ورزش", img: sportImg },
  { name: "هنر", img: artImg },
];

export default function Categories() {
  return (
    <section className="grid grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-10">
      {categories.map((category) => (
        <Link href="#" key={category.name}>
          <Card alt={category.name} src={category.img}>
            <span className="my-2 inline-block text-xl font-bold text-accent-500">
              {category.name}
            </span>
          </Card>
        </Link>
      ))}
    </section>
  );
}
