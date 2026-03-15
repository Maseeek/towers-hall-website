"use client";

import { useState } from "react";
import Image from "next/image";
import { COMMITTEE_ROLES, CATEGORIES, CommitteeRole } from "@/data/committee";

function RoleDetailModal({
  role,
  onClose,
}: {
  role: CommitteeRole;
  onClose: () => void;
}) {
  const [lightboxPoster, setLightboxPoster] = useState<string | null>(null);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Lightbox for single poster */}
      {lightboxPoster && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center"
          onClick={(e) => {
            e.stopPropagation();
            setLightboxPoster(null);
          }}
        >
          <div className="relative max-w-lg w-full max-h-[90vh] mx-4">
            <Image
              src={lightboxPoster}
              alt="Committee poster"
              width={600}
              height={900}
              className="w-full h-auto object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Modal card */}
      <div
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[rgba(75,156,211,0.2)] bg-[#0a1628] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ boxShadow: "0 0 80px rgba(75,156,211,0.15), inset 0 1px 0 rgba(255,255,255,0.05)" }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#0a1628] border-b border-[rgba(75,156,211,0.1)] px-8 py-5 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-3xl">{role.emoji}</span>
              <span className="text-xs text-[var(--towers-gold)] tracking-[0.25em] uppercase font-semibold">
                {role.category}
              </span>
            </div>
            <h2 className="towers-heading text-2xl md:text-3xl text-white">{role.title}</h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--towers-sky)]" />
              <span className="text-white/40 text-sm">{role.members.length} member{role.members.length !== 1 ? "s" : ""}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all"
          >
            ✕
          </button>
        </div>

        <div className="p-8 space-y-8">
          {/* Role description */}
          <div>
            <div className="text-xs text-[var(--towers-sky)] tracking-[0.2em] uppercase mb-3 font-semibold">What This Role Does</div>
            <p className="text-white/80 leading-relaxed">{role.extendedDescription}</p>
          </div>

          <div className="h-px bg-[rgba(75,156,211,0.1)]" />

          {/* Members */}
          <div>
            <div className="text-xs text-[var(--towers-sky)] tracking-[0.2em] uppercase mb-6 font-semibold">
              {role.members.length > 1 ? "The Team" : "The Person"}
            </div>
            <div
              className={`grid gap-6 ${
                role.members.length === 1
                  ? "grid-cols-1 max-w-md mx-auto"
                  : role.members.length === 2
                  ? "grid-cols-1 sm:grid-cols-2"
                  : role.members.length <= 4
                  ? "grid-cols-1 sm:grid-cols-2"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {role.members.map((member, i) => (
                <div
                  key={i}
                  className="glass-card rounded-2xl overflow-hidden border border-[rgba(75,156,211,0.08)] group cursor-pointer"
                  onClick={() => setLightboxPoster(member.poster)}
                >
                  {/* Poster preview */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={member.poster}
                      alt={`${member.name} committee poster`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="text-[10px] text-[var(--towers-gold)] tracking-[0.2em] uppercase mb-1">({member.nickname})</div>
                      <div className="text-white font-bold text-lg leading-tight">{member.name}</div>
                      <div className="text-white/50 text-xs mt-1">{member.course}</div>
                    </div>
                    <div className="absolute top-3 right-3 bg-[rgba(10,22,40,0.7)] backdrop-blur-sm rounded-full px-2 py-1 text-[10px] text-white/50">
                      View poster ↗
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="p-4 space-y-3">
                    <div>
                      <div className="text-[10px] text-[var(--towers-sky)] uppercase tracking-[0.15em] mb-1.5">Strengths</div>
                      <div className="flex flex-wrap gap-1.5">
                        {member.strengths.slice(0, 3).map((s, j) => (
                          <span key={j} className="text-[10px] text-white/60 bg-[rgba(75,156,211,0.08)] rounded-full px-2 py-0.5 border border-[rgba(75,156,211,0.1)]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[rgba(255,80,80,0.7)] uppercase tracking-[0.15em] mb-1.5">Weaknesses</div>
                      <div className="flex flex-wrap gap-1.5">
                        {member.weaknesses.slice(0, 2).map((w, j) => (
                          <span key={j} className="text-[10px] text-white/60 bg-[rgba(255,80,80,0.05)] rounded-full px-2 py-0.5 border border-[rgba(255,80,80,0.1)]">
                            {w}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CommitteeSection() {
  const [selectedRole, setSelectedRole] = useState<CommitteeRole | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? COMMITTEE_ROLES
      : COMMITTEE_ROLES.filter((r) => r.category === activeCategory);

  return (
    <section id="committee" className="!py-16 lg:!py-24 relative overflow-hidden w-full flex flex-col items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040d1f] via-[#060f22] to-[#040d1f]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(75,156,211,1) 1px, transparent 1px), linear-gradient(90deg, rgba(75,156,211,1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Header */}
        <div className="text-center !mb-24">
          <span className="towers-label text-[var(--towers-gold)] text-xs tracking-[0.25em] mb-3 block">
            Meet the Team
          </span>
          <h2 className="towers-heading text-5xl md:text-6xl text-white mb-4">
            Committee{" "}
            <span className="blue-text">2026/27</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
            The people behind the hall — organising events, supporting residents, and keeping the Towers spirit alive.
          </p>
          <div className="mt-6 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-[var(--towers-sky)] to-transparent" />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 active:scale-95 ${
                activeCategory === cat
                  ? "bg-[var(--towers-blue)] text-white shadow-lg"
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Role grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role)}
              className="group text-left glass-card rounded-2xl p-6 border border-[rgba(75,156,211,0.08)] hover:border-[rgba(75,156,211,0.3)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(75,156,211,0.15)] active:scale-[0.98] active:brightness-90 flex flex-col h-full"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {role.emoji}
                </div>
                <span className="text-[10px] text-white/30 tracking-widest uppercase font-semibold mt-1">
                  {role.members.length}× member{role.members.length !== 1 ? "s" : ""}
                </span>
              </div>

              {/* Role name */}
              <div className="mb-1">
                <div className="text-[10px] text-[var(--towers-gold)] tracking-[0.2em] uppercase mb-1">{role.category}</div>
                <h3 className="towers-heading text-white text-xl leading-tight font-black">{role.title}</h3>
              </div>

              {/* Description */}
              <p className="text-white/40 text-xs leading-relaxed mt-2 mb-4 line-clamp-3">
                {role.description}
              </p>

              {/* Member name previews */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {role.members.map((m, i) => (
                  <span
                    key={i}
                    className="text-[10px] text-[var(--towers-sky)] bg-[rgba(75,156,211,0.08)] rounded-full px-2 py-0.5 border border-[rgba(75,156,211,0.1)]"
                  >
                    {m.name.split(" ")[0]}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2 text-[var(--towers-sky)] text-xs font-bold group-hover:gap-3 transition-all mt-auto">
                <span>View profiles</span>
                <span className="opacity-60 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            </button>
          ))}
        </div>

        {/* Total count */}
        <div className="mt-12 text-center">
          <p className="text-white/25 text-sm">
            {COMMITTEE_ROLES.reduce((sum, r) => sum + r.members.length, 0)} committee members · {COMMITTEE_ROLES.length} roles · 2026/27
          </p>
        </div>
      </div>

      {/* Role detail modal */}
      {selectedRole && (
        <RoleDetailModal
          role={selectedRole}
          onClose={() => setSelectedRole(null)}
        />
      )}
    </section>
  );
}
