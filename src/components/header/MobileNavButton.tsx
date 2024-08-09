"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import type { MouseEventHandler } from "react";

interface MobileNavButtonProps {
  children: React.ReactNode;
}

export default function MobileNavButton({ children }: MobileNavButtonProps) {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);

  const handleToggle: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target !== e.currentTarget) return;
    setNavIsOpen((prev) => !prev);
  };

  if (typeof window === "undefined") return;

  return document ? (
    <div
      className="flex h-6 w-5 cursor-pointer flex-col justify-center gap-1 lg:hidden"
      onClick={handleToggle}
    >
      <div className="-z-10 h-[3px] w-full rounded-full bg-primary-600" />
      <div className="-z-10 h-[3px] w-full rounded-full bg-primary-600" />
      <div className="-z-10 h-[3px] w-full rounded-full bg-primary-600" />

      {createPortal(
        <aside
          onClick={handleToggle}
          className={`fixed top-0 z-20 h-screen w-screen bg-black/50 transition-all duration-500 lg:hidden ${navIsOpen ? "right-0 w-full opacity-100" : "-right-full w-0 opacity-0"}`}
        >
          {children}
        </aside>,
        document.body,
      )}
    </div>
  ) : null;
}
