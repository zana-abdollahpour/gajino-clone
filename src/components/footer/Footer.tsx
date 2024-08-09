import LogoContainer from "./LogoContainer";
import Info from "./Info";

export default function Footer() {
  return (
    <footer className="from -mt-52 bg-gray-gradient pt-40 text-accent-300 sm:-mt-72 sm:pt-72">
      <div className="mx-auto flex w-10/12 flex-col gap-12 text-[10px] md:gap-28">
        <Info />
        <LogoContainer />
      </div>

      <span className="mx-auto mb-4 mt-16 block w-fit text-[10px] sm:text-xs">
        تمامی حقوق برای گاج محفوظ است
      </span>
    </footer>
  );
}
