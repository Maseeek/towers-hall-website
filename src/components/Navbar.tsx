"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#events", label: "Events" },
  { href: "#committee", label: "Committee" },
  { href: "#gallery", label: "Gallery" },
  { href: "#history", label: "History" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[rgba(4,13,31,0.95)] backdrop-blur-xl border-b border-[rgba(75,156,211,0.15)] shadow-[0_4px_30px_rgba(10,22,40,0.8)]"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[rgba(75,156,211,0.4)] group-hover:border-[var(--towers-gold)] transition-all duration-300">
            <Image
              src="/images/towers-logo.png"
              alt="Towers Hall Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span
              className="towers-heading text-white text-lg tracking-widest"
              style={{ fontWeight: 900, letterSpacing: "0.12em" }}
            >
              TOWERS
            </span>
            <span
              className="text-[var(--towers-sky)] text-[10px] tracking-[0.2em] uppercase font-semibold"
            >
              Loughborough · Est. 1965
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link text-sm font-semibold tracking-wide">
              {link.label}
            </a>
          ))}
          <a
            href="#events"
            className="btn-gold px-5 py-2 rounded-full text-sm font-bold tracking-wide"
          >
            🎟 Get Tickets
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } bg-[rgba(4,13,31,0.98)] border-t border-[rgba(75,156,211,0.15)]`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white font-semibold tracking-wide text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#events"
            className="btn-gold px-5 py-2 rounded-full text-sm font-bold text-center"
            onClick={() => setMenuOpen(false)}
          >
            🎟 Get Tickets
          </a>
        </div>
      </div>
    </nav>
  );
}
