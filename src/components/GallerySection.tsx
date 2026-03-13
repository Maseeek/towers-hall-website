"use client";

import Image from "next/image";

const galleryImages = [
  { src: "/gallery/gallery-1.png", alt: "Towers Hall exterior" },
  { src: "/gallery/gallery-2.png", alt: "Towers Hall views" },
  { src: "/gallery/gallery-3.png", alt: "Hall event" },
  { src: "/gallery/gallery-4.png", alt: "Summer Ball" },
  { src: "/gallery/gallery-5.png", alt: "Committee" },
  { src: "/gallery/gallery-6.png", alt: "Hall social" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#071020] to-[#040d1f]" />
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 80% 50%, rgba(30,77,183,0.4) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="towers-label text-[var(--towers-sky)] text-xs tracking-[0.25em] mb-3 block">
            Life at Towers
          </span>
          <h2 className="towers-heading text-5xl md:text-6xl text-white mb-4">
            The{" "}
            <span className="gold-text">Gallery</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            Snapshots of life at one of Loughborough's most iconic halls — the moments, the views, the memories.
          </p>
          <div className="mt-6 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-[var(--towers-gold)] to-transparent" />
        </div>

        {/* Committee Poster Gallery (always visible) */}
        <div className="mb-12">
          <h3 className="text-center text-xs font-bold text-white/40 tracking-[0.25em] uppercase mb-8">
            ── Hall Graphics & Media ──
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/media/committee-insta-bio.png", label: "Committee 26/27" },
              { src: "/media/insta-logo.png", label: "Towers Brand" },
              { src: "/media/summer-ball-poster.png", label: "Summer Ball 2026" },
              { src: "/media/committee-list.png", label: "Committee Roles" },
              { src: "/media/highlight-thumb.png", label: "Highlights" },
              { src: "/media/fleece-front.png", label: "Committee Fleece" },
            ].map((item, i) => (
              <div key={i} className="gallery-item group relative aspect-square bg-[rgba(10,22,40,0.8)] border border-[rgba(75,156,211,0.1)] rounded-xl overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,22,40,0.9)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-bold text-sm">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upload CTA */}
        <div className="glass-card text-center p-10 rounded-2xl border border-[rgba(75,156,211,0.15)]">
          <div className="text-4xl mb-4">📸</div>
          <h3 className="towers-heading text-2xl text-white mb-3">Got photos to share?</h3>
          <p className="text-white/50 mb-6 max-w-sm mx-auto text-sm leading-relaxed">
            The gallery is growing — follow Towers on Instagram to see the latest from around the hall.
          </p>
          <a
            href="https://www.instagram.com/towershall/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-3 rounded-full font-bold inline-flex items-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
            </svg>
            @towershall
          </a>
        </div>
      </div>
    </section>
  );
}
