"use client";

import { useState } from "react";
import Image from "next/image";

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.lumileo.deviio";

const links = [
  { label: "Fonctionnalités", href: "#features" },
  { label: "Tarifs", href: "#pricing" },
  { label: "Comparatif", href: "#compare" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Deviio"
              width={36}
              height={36}
              className="rounded-[10px]"
            />
            <span className="font-[var(--font-cabinet)] text-xl font-extrabold text-ink">
              Deviio
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-ink-muted hover:text-blue transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={PLAY_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange/90 transition-colors"
            >
              Télécharger
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg
              className="h-6 w-6 text-ink"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 space-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-ink-muted hover:text-blue px-2 py-1.5"
              >
                {l.label}
              </a>
            ))}
            <a
              href={PLAY_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white"
            >
              Télécharger
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
