"use client";

import { useState } from "react";
import type { MouseEventHandler } from "react";

interface MobileNavButtonProps {
  children: React.ReactNode;
}

export default function MobileNavButton({ children }: MobileNavButtonProps) {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);

  const handleToggle: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target !== e.currentTarget) return;
    // prevents user from scrolling when navbar in mobile is open
    window.document.body.classList.toggle("overflow-hidden");
    setNavIsOpen((prev) => !prev);
  };

  return (
    <div
      className="flex h-6 w-5 cursor-pointer flex-col justify-center gap-1 lg:hidden"
      onClick={handleToggle}
    >
      {Array(3)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className={`-z-10 h-0.5 w-full rounded-full bg-primary-600 transition-all duration-700 ${navIsOpen ? "opacity-0" : "opacity-1"}`}
          />
        ))}

      <aside
        onClick={handleToggle}
        className={`fixed top-0 z-20 h-screen w-screen bg-black/50 transition-all duration-500 lg:hidden ${navIsOpen ? "right-0 w-full opacity-100" : "-right-full w-0 opacity-0"}`}
      >
        {children}
      </aside>
    </div>
  );
}
