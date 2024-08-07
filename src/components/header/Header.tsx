import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 flex h-14 w-full max-w-[120rem] items-center justify-between bg-white p-6">
      <Image
        src="exit.svg"
        width={24}
        height={24}
        alt="exit"
        className="cursor-pointer"
      />
      <Link href="/">
        <Image src="logo.svg" width={40} height={40} alt="home" />
      </Link>
      <div className="flex h-6 w-5 cursor-pointer flex-col justify-center gap-1">
        <div className="bg-primary-600 h-[3px] w-full rounded-full"></div>
        <div className="bg-primary-600 h-[3px] w-full rounded-full"></div>
        <div className="bg-primary-600 h-[3px] w-full rounded-full"></div>
      </div>
    </header>
  );
}
