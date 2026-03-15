"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const galleryImages = [
  // History
  { src: "/gallery/history-1960s.jpg", alt: "Towers Hall (1960s)" },
  { src: "/gallery/history-1970s.jpg", alt: "Towers Hall (1970s)" },
  { src: "/gallery/history-1990s.jpg", alt: "Towers Bedroom (1990s)" },
  { src: "/gallery/history-bar.jpg", alt: "Original Towers Bar" },
  // Hall Day 2024
  { src: "/gallery/hall-day-2024-1.jpg", alt: "Hall Day 2024" },
  { src: "/gallery/hall-day-2024-2.jpg", alt: "Hall Day 2024" },
  { src: "/gallery/hall-day-2024-5.jpg", alt: "Hall Day Festivities" },
  { src: "/gallery/hall-day-2024-6.jpg", alt: "Hall Day BBQ" },
  { src: "/gallery/hall-day-2024-7.jpg", alt: "Hall Day Games" },
  { src: "/gallery/hall-day-2024-8.jpg", alt: "Hall Day Smiles" },
  // Summer Ball 2024
  { src: "/gallery/summer-ball-2024-1.jpg", alt: "Summer Ball 2024" },
  { src: "/gallery/summer-ball-2024-2.jpg", alt: "Summer Ball 2024" },
  { src: "/gallery/summer-ball-2024-3.jpg", alt: "Summer Ball Celebs" },
  { src: "/gallery/summer-ball-2024-4.jpg", alt: "Summer Ball Night" },
  { src: "/gallery/summer-ball-2024-5.jpg", alt: "Summer Ball Memories" },
  // Additional Hall Views
  { src: "/gallery/gallery-1.png", alt: "Towers Hall Skyline" },
  { src: "/gallery/gallery-2.png", alt: "Hall Architecture" },
];

export default function GallerySection() {
  const [shuffledImages, setShuffledImages] = useState(galleryImages);

  useEffect(() => {
    // Shuffle images on client-side mount to avoid hydration mismatch
    const shuffled = [...galleryImages].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, []);

  return (
    <section
      id="gallery"
      className="!py-16 lg:!py-32 w-full relative flex flex-col items-center overflow-hidden"
      style={{ scrollMarginTop: "72px" }}
    >
      <div className="absolute inset-0 bg-[#071020]" />
      
      {/* Decorative lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--towers-sky)] opacity-[0.03] blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--towers-gold)] opacity-[0.03] blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-20 w-full">
          <span className="towers-label text-[var(--towers-sky)] text-xs tracking-[0.25em] mb-3 block">
            Life at Towers
          </span>
          <h2 className="towers-heading text-5xl md:text-6xl text-white mb-6">
            The <span className="gold-text uppercase tracking-tighter">Gallery</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg font-light leading-relaxed">
            A living collection of moments, views, and memories from Loughborough's iconic heights.
          </p>
          <div className="mt-8 mx-auto w-32 h-px bg-gradient-to-r from-transparent via-[var(--towers-gold)] to-transparent opacity-50" />
        </div>

        {/* Irregular "Masonry" Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[200px] grid-flow-dense">
          {shuffledImages.map((image, i) => {
            // Logic for irregular spans
            const isWide = (i % 7 === 1) || (i % 7 === 6);
            const isTall = (i % 7 === 2) || (i % 7 === 4);
            const isLarge = (i % 7 === 0);
            
            // Random-ish rotation for natural feel
            const rotation = ((i * 13) % 4) - 2; // -2 to +1 degrees
            
            return (
              <div
                key={`${image.src}-${i}`}
                style={{ transform: `rotate(${rotation}deg)` }}
                className={`
                  group relative overflow-hidden bg-[#0a1628] rounded-xl md:rounded-2xl border border-[rgba(75,156,211,0.08)] 
                  hover:border-[rgba(75,156,211,0.25)] transition-all duration-500 shadow-xl hover:shadow-2xl hover:z-20 hover:scale-[1.02]
                  ${isWide ? 'col-span-2' : 'col-span-1'} 
                  ${isTall ? 'row-span-2' : 'row-span-1'} 
                  ${isLarge ? 'col-span-2 row-span-2' : ''}
                `}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0"
                />
                
                {/* Overlay with details */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071020]/90 via-[#071020]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-5 md:p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full">
                    <div className="flex items-center gap-2 mb-2">
                       <div className="w-6 h-px bg-[var(--towers-gold)]" />
                       <span className="text-[var(--towers-gold)] text-[10px] tracking-widest uppercase font-bold">Captured</span>
                    </div>
                    <span className="text-white text-base md:text-xl font-medium block truncate pr-4">{image.alt}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Upload CTA - With a more natural floating feel */}
        <div className="w-full mt-32 text-center max-w-2xl relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-[var(--towers-sky)] opacity-[0.05] blur-3xl pointer-events-none" />
          
          <div className="w-20 h-20 bg-[rgba(75,156,211,0.05)] rounded-full flex items-center justify-center mx-auto mb-8 border border-[rgba(75,156,211,0.15)] shadow-inner">
             <span className="text-4xl filter drop-shadow-md">📸</span>
          </div>
          
          <h3 className="towers-heading text-3xl md:text-4xl text-white mb-6">
            Add to the <span className="gold-text">Archive</span>
          </h3>
          <p className="text-white/50 mb-10 text-lg leading-relaxed font-light">
            Every generation leaves its mark. Tag us in your photos or follow our journey through the seasons.
          </p>
          
          <a
            href="https://www.instagram.com/towershall/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-12 py-4 bg-transparent text-white font-bold inline-flex items-center gap-4 overflow-hidden rounded-full border border-white/10 hover:border-[var(--towers-gold)] transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--towers-gold)] to-[#ff8c00] opacity-0 group-hover:opacity-10 transition-opacity" />
            
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:rotate-12 transition-transform duration-500 text-[var(--towers-gold)]"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            <span className="tracking-wide">Follow @towershall</span>
          </a>
        </div>
      </div>
    </section>
  );
}
