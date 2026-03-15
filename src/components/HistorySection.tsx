"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

// Historical photos for the scrolling strip (looped × 2 for seamless infinite scroll)
const stripPhotos = [
  { src: "/history/1964.jpg",               alt: "Towers Hall, 1964",             label: "1964" },
  { src: "/history/1960s.JPG",              alt: "Towers Hall, 1960s",            label: "1960s" },
  { src: "/history/Original Dining Hall.JPG", alt: "Original Dining Hall",       label: "Dining Hall" },
  { src: "/history/1970s.jpg",              alt: "Towers Hall, 1970s",            label: "1970s" },
  { src: "/history/Dining Staff 1970s.JPG", alt: "Dining staff in the 1970s",    label: "1970s Staff" },
  { src: "/history/1985.jpg",               alt: "Towers Hall, 1985",             label: "1985" },
  { src: "/history/Towers Bar Dancefloor.JPG", alt: "Towers Bar dance floor",    label: "Bar Floor" },
  { src: "/history/Towers Bar.jpg",         alt: "The Towers Bar",               label: "Towers Bar" },
  { src: "/history/Towers Bedroom 1990s.jpg", alt: "Student bedroom, 1990s",     label: "1990s" },
  { src: "/history/01.04.2006.JPG",         alt: "Towers Hall, 2006",            label: "2006" },
  { src: "/history/2013-2014.JPG",          alt: "Committee 2013–14",            label: "2013–14" },
  { src: "/history/Towers Tribe 2016.jpg",  alt: "Towers Tribe, 2016",           label: "2016" },
  { src: "/history/2017-2018.PNG",          alt: "Committee 2017–18",            label: "2017–18" },
  { src: "/history/Looking over East.JPG",  alt: "Looking east over campus",     label: "Campus View" },
];

const timelineItems = [
  {
    decade: "1964 – 1967",
    title: "Towers Hall is Born",
    content:
      "Towers Hall opens its doors as part of Loughborough University's post-war expansion. The twin towers become an immediate campus landmark, and the first-ever floor plan (1967) maps out the hall that generations of students would call home.",
    photo: "/history/1964.jpg",
    photoAlt: "Towers Hall, 1964",
    side: "left",
  },
  {
    decade: "1970s",
    title: "Community Takes Root",
    content:
      "The dining hall becomes the beating heart of hall life — a place where friendships are forged and traditions begin. The dedicated kitchen and dining staff preside over three squares a day for hundreds of residents.",
    photo: "/history/Dining Staff 1970s.JPG",
    photoAlt: "Dining staff in the 1970s",
    side: "right",
  },
  {
    decade: "1980s",
    title: "The Tiger Earns Its Stripes",
    content:
      "The Towers white tiger mascot becomes firmly embedded in the hall's identity — a symbol of pride, strength, and community spirit. The Towers Bar dancefloor witnesses legendary nights that students talk about for decades.",
    photo: "/history/Towers Bar Dancefloor.JPG",
    photoAlt: "Towers Bar dance floor",
    side: "left",
  },
  {
    decade: "1990s",
    title: "A Vibrant Social Hub",
    content:
      "The Towers Bar is at its peak — a proper student pub with character. Bedroom walls are adorned with posters, and Towers continues to attract students who want more than just a room: they want a community.",
    photo: "/history/Towers Bedroom 1990s.jpg",
    photoAlt: "Student bedroom in the 1990s",
    side: "right",
  },
  {
    decade: "2000s",
    title: "Into the New Millennium",
    content:
      "Hall events, Wardens' Nights, and charity drives cement Towers' reputation for inclusivity. The hall continues to grow, drawing students from all corners of the globe under the banner of the white tiger.",
    photo: "/history/01.04.2006.JPG",
    photoAlt: "Towers Hall, April 2006",
    side: "left",
  },
  {
    decade: "2010s",
    title: "The Towers Tribe",
    content:
      "The concept of 'Towers Tribe' captures the hall's unique sense of belonging. Committee life flourishes and year-on-year memories are documented — from socials to charity balls — by a community stronger than ever.",
    photo: "/history/Towers Tribe 2016.jpg",
    photoAlt: "Towers Tribe 2016",
    side: "right",
  },
  {
    decade: "2024 – 2025",
    title: "60 Years & Counting",
    content:
      "Towers Hall celebrates its 60th anniversary with a special commemorative logo. The 2026/27 committee takes the helm — led by Hall Chair Ciaran 'Ryu' Nishimura-Harrison — carrying forward six decades of pride.",
    photo: "/history/2017-2018.PNG",
    photoAlt: "Committee 2017–18",
    side: "left",
  },
];

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({
  src,
  alt,
  label,
  onClose,
}: {
  src: string;
  alt: string;
  label?: string;
  onClose: () => void;
}) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center modal-backdrop"
      onClick={onClose}
    >
      {/* Card */}
      <div
        className="relative max-w-4xl w-[90vw] max-h-[88vh] rounded-2xl overflow-hidden shadow-2xl"
        style={{ background: "rgba(6,12,25,0.95)", border: "1px solid rgba(201,168,76,0.2)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer" }}
          aria-label="Close lightbox"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative w-full" style={{ maxHeight: "75vh" }}>
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            style={{ maxHeight: "75vh", display: "block" }}
          />
        </div>

        {/* Caption */}
        {(label || alt) && (
          <div className="px-6 py-4 flex items-center gap-3">
            {label && <span className="decade-badge">{label}</span>}
            <span className="text-white/60 text-sm">{alt}</span>
          </div>
        )}
      </div>

      {/* ESC hint */}
      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/30 text-xs tracking-widest uppercase">
        Press ESC or click outside to close
      </p>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function HistorySection() {
  const doubled = [...stripPhotos, ...stripPhotos]; // seamless loop

  const [lightbox, setLightbox] = useState<{ src: string; alt: string; label?: string } | null>(null);

  const openLightbox = (src: string, alt: string, label?: string) =>
    setLightbox({ src, alt, label });

  return (
    <>
      {/* ── Lightbox Portal ── */}
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          label={lightbox.label}
          onClose={() => setLightbox(null)}
        />
      )}

      <section
        id="history"
        className="!py-20 lg:!py-28 w-full relative flex flex-col items-center overflow-hidden"
        style={{ scrollMarginTop: "72px" }}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050e1f] via-[#06101f] to-[#040d1f]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              rgba(201,168,76,0.4) 0px,
              rgba(201,168,76,0.4) 1px,
              transparent 1px,
              transparent 80px
            ), repeating-linear-gradient(
              0deg,
              rgba(201,168,76,0.4) 0px,
              rgba(201,168,76,0.4) 1px,
              transparent 1px,
              transparent 80px
            )`,
          }}
        />

        <div className="relative z-10 w-full flex flex-col items-center">
          {/* ── Header ── */}
          <div className="text-center mb-10 px-6">
            <span className="towers-label text-[var(--towers-gold)] text-xs tracking-[0.35em] mb-3 block opacity-80">
              Est. 1965 · Loughborough University
            </span>
            <h2 className="towers-heading text-5xl md:text-6xl text-white mb-3">
              Towers{" "}
              <span className="gold-text">Archive</span>
            </h2>
            <p className="text-white/50 text-sm max-w-md mx-auto leading-relaxed">
              Six decades of memories, traditions, and community — preserved for
              every generation of Towers residents.
            </p>
            <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[var(--towers-gold)] to-transparent opacity-50" />
          </div>

          {/* ── Scrolling Photo Strip ── */}
          <div className="w-full overflow-hidden mb-16 relative">
            <div className="absolute left-0 inset-y-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[#050e1f] to-transparent" />
            <div className="absolute right-0 inset-y-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[#050e1f] to-transparent" />

            <div className="photo-strip py-3">
              {doubled.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => openLightbox(photo.src, photo.alt, photo.label)}
                  className="archive-frame flex-shrink-0 overflow-hidden rounded-xl focus:outline-none group"
                  style={{ width: 220, height: 155, cursor: "zoom-in", background: "none", border: "none", padding: 0 }}
                  aria-label={`View photo: ${photo.alt}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={220}
                    height={155}
                    className="archive-photo object-cover w-full h-full"
                    style={{ borderRadius: "inherit" }}
                  />
                  {/* Hover zoom hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="6.5" cy="6.5" r="4.5" stroke="white" strokeWidth="1.5"/>
                        <path d="M10.5 10.5l3.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M6.5 4.5v4M4.5 6.5h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                  {/* Decade label */}
                  <div className="absolute bottom-2 left-2 decade-badge" style={{ fontSize: "0.5rem" }}>
                    {photo.label}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ── Decade Timeline ── */}
          <div className="max-w-5xl w-full px-6 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(201,168,76,0.25)] to-transparent hidden md:block" />

            <div className="space-y-10">
              {timelineItems.map((item, i) => (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row gap-6 items-center ${
                    item.side === "right" ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Card */}
                  <div className="flex-1 max-w-md">
                    <div className="archive-card p-6">
                      {/* Clickable photo */}
                      <button
                        onClick={() => openLightbox(item.photo, item.photoAlt, item.decade)}
                        className="archive-frame overflow-hidden rounded-lg mb-4 w-full group focus:outline-none"
                        style={{ height: 155, display: "block", background: "none", border: "none", padding: 0, cursor: "zoom-in" }}
                        aria-label={`View photo: ${item.photoAlt}`}
                      >
                        <Image
                          src={item.photo}
                          alt={item.photoAlt}
                          width={400}
                          height={155}
                          className="archive-photo object-cover w-full h-full"
                        />
                        {/* Hover zoom hint */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <circle cx="6.5" cy="6.5" r="4.5" stroke="white" strokeWidth="1.5"/>
                              <path d="M10.5 10.5l3.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                              <path d="M6.5 4.5v4M4.5 6.5h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </div>
                        </div>
                      </button>

                      <div className="flex items-center gap-2 mb-2">
                        <span className="decade-badge">{item.decade}</span>
                      </div>
                      <h3 className="towers-heading text-lg text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/55 text-sm leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>

                  {/* Centre dot */}
                  <div className="hidden md:flex w-9 h-9 rounded-full border border-[rgba(201,168,76,0.5)] bg-[var(--towers-navy)] items-center justify-center flex-shrink-0 z-10 gold-glow">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--towers-gold)]" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>

          {/* ── Constitution note ── */}
          <div className="mt-14 max-w-5xl w-full px-6">
            <div className="mt-2 glass-card-dark rounded-2xl p-7 border border-[rgba(201,168,76,0.1)] text-center">
              <div className="text-3xl mb-4">📜</div>
              <h3 className="towers-heading text-xl text-white mb-3">Hall Constitution</h3>
              <p className="text-white/50 text-sm mb-4">
                The values, structure and governance of Towers Hall are enshrined
                in our Hall Constitution — written by students, for students.
              </p>
              <span className="text-xs text-white/30 tracking-widest uppercase">
                Towers Hall Constitution — Updated 26/27
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
