"use client";

import Image from "next/image";

const events = [
  {
    id: 1,
    title: "Towers Summer Ball 2026",
    date: "24 April 2026",
    time: "18:00 – 23:00",
    location: "Winstanley House, Leicester",
    description:
      "The highlight event of the Towers Hall calendar. An unforgettable evening of dining, dancing, and celebrating the best year yet. Tickets on sale 16th March.",
    tags: ["Black Tie", "Major Event", "Tickets Required"],
    badge: "⭐ Featured",
    badgeColor: "var(--towers-gold)",
    accentColor: "#1e4db7",
    ticketsUrl: "#",
    image: "/events/summer-ball.png",
  },
  {
    id: 2,
    title: "Easter Egg Painting Workshop",
    date: "17 March 2026",
    time: "19:00 – 21:00",
    location: "Towers Common Room",
    description:
      "Get crafty with Falk Egg! Join your fellow residents in decorating Easter eggs — a relaxing and creative evening to kick off the Easter break.",
    tags: ["Free Entry", "Social", "Craft"],
    badge: "🎨 Coming Up",
    badgeColor: "var(--towers-sky)",
    accentColor: "#0f3060",
    ticketsUrl: null,
    image: null,
  },
  {
    id: 3,
    title: "University Mental Health Day",
    date: "12 March 2026",
    time: "10:00 – 14:00",
    location: "EHB Atrium",
    description:
      "This year's theme is 'Human Connection'. Come along for self-care activities, awareness resources, and a chance to connect with others. All welcome.",
    tags: ["Wellbeing", "Free Entry", "Today"],
    badge: "💙 Today",
    badgeColor: "#4b9cd3",
    accentColor: "#0a2a50",
    ticketsUrl: null,
    image: null,
  },
];

export default function EventsSection() {
  return (
    <section
      id="events"
      className="py-28 relative"
      style={{ scrollMarginTop: "72px" }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040d1f] via-[#071428] to-[#050e1f]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, rgba(30,77,183,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-8">
        {/* Section Header — centred */}
        <div className="text-center mb-16">
          <span className="towers-label text-[var(--towers-gold)] text-xs tracking-[0.25em] mb-4 block">
            What&apos;s On
          </span>
          <h2 className="towers-heading text-5xl md:text-6xl text-white mb-5">
            Upcoming <span className="blue-text">Events</span>
          </h2>
          <p className="text-white/60 max-w-lg mx-auto text-base leading-relaxed">
            From formal balls to community socials — there&apos;s always something happening at Towers.
          </p>
          <div className="mt-6 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-[var(--towers-sky)] to-transparent" />
        </div>

        {/* ── Featured Event ── */}
        <div className="mb-8">
          <div className="glass-card-dark rounded-2xl overflow-hidden border border-[rgba(201,168,76,0.2)] event-card relative">
            {/* Gold top accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--towers-gold)] via-[var(--towers-gold-light)] to-[var(--towers-gold)]" />

            <div className="flex flex-col md:flex-row">
              {/* Poster */}
              <div className="md:w-72 lg:w-80 flex-shrink-0 relative min-h-[280px]">
                <Image
                  src="/events/summer-ball.png"
                  alt="Towers Summer Ball 2026"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(4,13,31,0.5)] md:block hidden" />
              </div>

              {/* Content */}
              <div className="flex-1 p-8 md:p-10 flex flex-col gap-5">
                {/* Badge row */}
                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className="px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
                    style={{
                      background: "rgba(201,168,76,0.15)",
                      color: "var(--towers-gold)",
                      border: "1px solid rgba(201,168,76,0.35)",
                    }}
                  >
                    ⭐ Featured Event
                  </span>
                  <span className="text-white/40 text-xs font-medium tracking-wider uppercase">Black Tie</span>
                </div>

                {/* Title + description */}
                <div>
                  <h3 className="towers-heading text-3xl md:text-4xl text-white mb-3">
                    Towers Summer Ball <span className="gold-text">2026</span>
                  </h3>
                  <p className="text-white/65 text-base leading-relaxed">
                    The highlight event of the Towers Hall calendar. An unforgettable evening of
                    dining, dancing, and celebrating the best year yet.
                  </p>
                </div>

                {/* Info tiles */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { icon: "📅", label: "Date", value: "24 April 2026" },
                    { icon: "⏰", label: "Time", value: "18:00 – 23:00" },
                    { icon: "📍", label: "Location", value: "Winstanley House, Leicester" },
                  ].map((d, i) => (
                    <div
                      key={i}
                      className="bg-[rgba(30,77,183,0.15)] rounded-xl p-4 border border-[rgba(75,156,211,0.1)]"
                    >
                      <div className="text-xl mb-1.5">{d.icon}</div>
                      <div className="text-white/40 text-[10px] uppercase tracking-wider mb-1">{d.label}</div>
                      <div className="text-white font-semibold text-sm">{d.value}</div>
                    </div>
                  ))}
                </div>

                {/* CTAs — generous padding */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="#"
                    className="btn-gold px-8 py-4 rounded-full font-bold text-sm"
                  >
                    🎟&nbsp; Get Tickets
                    <span className="opacity-65 ml-1 text-xs font-normal">(On sale 16 Mar)</span>
                  </a>
                  <a
                    href="https://www.instagram.com/towershall/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-8 py-4 rounded-full font-bold text-sm"
                  >
                    📣&nbsp; Follow Updates
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Smaller events grid ── */}
        <div className="grid md:grid-cols-2 gap-6">
          {events.slice(1).map((event) => (
            <div
              key={event.id}
              className="glass-card rounded-2xl event-card relative overflow-hidden flex flex-col"
            >
              {/* Left accent bar */}
              <div
                className="absolute top-0 left-0 w-1 h-full"
                style={{ background: event.badgeColor }}
              />

              {/* All content has its own left padding — no ml offset */}
              <div className="flex-1 flex flex-col p-6 pl-8 gap-4">
                {/* Badge */}
                <span
                  className="px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase self-start"
                  style={{
                    background: `${event.badgeColor}20`,
                    color: event.badgeColor,
                    border: `1px solid ${event.badgeColor}50`,
                  }}
                >
                  {event.badge}
                </span>

                {/* Title + body */}
                <div>
                  <h3 className="towers-heading text-2xl text-white mb-2">{event.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{event.description}</p>
                </div>

                {/* Date / time / location */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-base">📅</span>
                    <span className="text-white/80 font-medium">{event.date}</span>
                    <span className="text-white/30">·</span>
                    <span className="text-white/70">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-base">📍</span>
                    <span className="text-white/70">{event.location}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {event.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-white/50 border border-white/10 bg-white/[0.03]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Instagram CTA ── */}
        <div className="text-center mt-14 pt-8 border-t border-white/[0.06]">
          <p className="text-white/35 text-sm mb-3">Stay up to date with all events</p>
          <a
            href="https://www.instagram.com/towershall/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--towers-sky)] hover:text-white transition-colors font-semibold text-sm"
          >
            <span>Follow @towershall on Instagram</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
