import Hero from "@/components/hero/Hero";
import Categories from "@/components/categories/Categories";
import Discounts from "@/components/discounts/Discounts";
import Courses from "@/components/courses/Courses";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Discounts />
      <Courses />
    </>
  );
}
