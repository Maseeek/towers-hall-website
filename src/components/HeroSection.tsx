"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Animated orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-[80px] animate-pulse"
        style={{ background: "radial-gradient(circle, #1e4db7 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-15 blur-[60px] animate-float"
        style={{ background: "radial-gradient(circle, #4b9cd3 0%, transparent 70%)", animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[100px]"
        style={{ background: "radial-gradient(circle, #1a3a6b 0%, transparent 70%)" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(75,156,211,1) 1px, transparent 1px), linear-gradient(90deg, rgba(75,156,211,1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-10 animate-fadeInUp">
          <div className="relative w-40 h-40 animate-float">
            <Image
              src="/images/towers-logo.png"
              alt="Towers Hall Logo"
              fill
              className="object-contain drop-shadow-[0_0_40px_rgba(75,156,211,0.6)]"
              priority
            />
          </div>
        </div>

        {/* Title */}
        <div className="animate-fadeInUp delay-100">
          <div className="towers-label text-[var(--towers-sky)] text-sm tracking-[0.4em] mb-4">
            Loughborough University
          </div>
          <h1
            className="text-7xl md:text-9xl lg:text-[10rem] text-white mb-4"
            style={{
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 0.9,
              textShadow: "0 0 80px rgba(75,156,211,0.3)",
            }}
          >
            TOWERS
          </h1>
          <div className="towers-label text-[var(--towers-gold)] text-sm tracking-[0.6em] mt-2">
            HALL — EST. 1965
          </div>
        </div>

        {/* Tagline */}
        <p
          className="text-white/60 text-xl md:text-2xl mt-8 mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-200"
          style={{ fontStyle: "italic" }}
        >
          One of the biggest halls on campus — with hands down the best views 🌅
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp delay-300">
          <a href="#events" className="btn-gold px-8 py-4 rounded-full font-bold text-base inline-flex items-center gap-2">
            🎟 Upcoming Events
          </a>
          <a href="#committee" className="btn-primary px-8 py-4 rounded-full font-bold text-base inline-flex items-center gap-2">
            Meet the Committee
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 animate-fadeInUp delay-400">
          {[
            { value: "60+", label: "Years of History" },
            { value: "100s", label: "Residents" },
            { value: "#1", label: "Best Views" },
            { value: "∞", label: "Good Times" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl font-black text-white mb-1"
                style={{ textShadow: "0 0 20px rgba(75,156,211,0.4)" }}
              >
                {stat.value}
              </div>
              <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-medium">Scroll</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
