import LogoContainer from "./LogoContainer";
import Info from "./Info";

export default function Footer() {
  return (
    <footer className="from -mt-52 bg-gray-gradient pt-40 text-accent-500 sm:-mt-72 sm:pt-72">
      <div className="mx-auto flex w-10/12 flex-col gap-12 text-[10px]">
        <Info />
        <LogoContainer />
      </div>

      <span className="mx-auto mb-4 mt-16 block w-fit text-[10px]">
        تمامی حقوق برای گاج محفوظ است
      </span>
    </footer>
  );
}
