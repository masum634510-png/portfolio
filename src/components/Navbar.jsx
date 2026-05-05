"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-md text-cyan-600 dark:text-cyan-400 font-inter tracking-tight docked full-width top-0 sticky z-50 border-b border-slate-200 dark:border-slate-800 shadow-[0_0_15px_rgba(0,240,255,0.1)]"
      data-purpose="navigation"
    >
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div
          className="font-mono font-bold text-xl text-cyan-600 dark:text-cyan-400 cursor-pointer active:scale-95 duration-200"
          data-purpose="brand-logo"
        >
          Masum
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center" data-purpose="nav-links">
          <Link
            href="#hero"
            className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:text-cyan-300 transition-colors cursor-pointer active:scale-95 duration-200"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:text-cyan-300 transition-colors cursor-pointer active:scale-95 duration-200"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:text-cyan-300 transition-colors cursor-pointer active:scale-95 duration-200"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:text-cyan-300 transition-colors cursor-pointer active:scale-95 duration-200"
          >
            Projects
          </Link>
          <Link
            href="#education"
            className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:text-cyan-300 transition-colors cursor-pointer active:scale-95 duration-200"
          >
            Education
          </Link>
          <Link
            href="#contact"
            className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-500 dark:text-cyan-300 transition-colors cursor-pointer active:scale-95 duration-200"
          >
            Contact
          </Link>
          <ThemeToggle />

        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:text-cyan-300 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <Link
              href="#hero"
              onClick={() => setIsOpen(false)}
              className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:text-cyan-300 transition-colors block"
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:text-cyan-300 transition-colors block"
            >
              About
            </Link>
            <Link
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:text-cyan-300 transition-colors block"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:text-cyan-300 transition-colors block"
            >
              Projects
            </Link>
            <Link
              href="#education"
              onClick={() => setIsOpen(false)}
              className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:text-cyan-300 transition-colors block"
            >
              Education
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:text-cyan-300 transition-colors block"
            >
              Contact
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}
