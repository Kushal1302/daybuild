"use client";

import { useState } from "react";
import Link from "next/link";
import { Instagram, Youtube, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-xl tracking-tighter"
          onClick={() => setOpen(false)}
        >
          <span className="text-orange-400">JSON</span>
          <span className="text-accent">Dreams</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
            <Link href="/blog" className="hover:text-white transition-colors">
              Stories
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              Mission
            </Link>
          </div>

          <div className="flex items-center gap-4 border-l border-white/10 pl-6 text-zinc-500">
            <Link
              href="https://instagram.com/jsondreams"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href="https://youtube.com/@jsondreams/shorts"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <Youtube size={18} />
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-400"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-background/95 backdrop-blur-md px-6 py-6 space-y-6">
          <Link
            href="/blog"
            className="block text-sm uppercase tracking-wider text-zinc-300 hover:text-white"
            onClick={() => setOpen(false)}
          >
            Stories
          </Link>

          <Link
            href="/about"
            className="block text-sm uppercase tracking-wider text-zinc-300 hover:text-white"
            onClick={() => setOpen(false)}
          >
            Mission
          </Link>

          <div className="flex gap-6 pt-4 border-t border-white/10 text-zinc-400">
            <Link
              href="https://instagram.com/jsondreams"
              target="_blank"
              className="hover:text-white"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://youtube.com/@jsondreams"
              target="_blank"
              className="hover:text-white"
            >
              <Youtube size={20} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
