"use client";

export default function HistorySection() {
  return (
    <section id="history" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050e1f] to-[#040d1f]" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            rgba(75,156,211,0.3) 0px,
            rgba(75,156,211,0.3) 1px,
            transparent 1px,
            transparent 60px
          ), repeating-linear-gradient(
            0deg,
            rgba(75,156,211,0.3) 0px,
            rgba(75,156,211,0.3) 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="towers-label text-[var(--towers-gold)] text-xs tracking-[0.25em] mb-3 block">
            Est. 1965
          </span>
          <h2 className="towers-heading text-5xl md:text-6xl text-white mb-4">
            Our{" "}
            <span className="blue-text">History</span>
          </h2>
          <div className="mt-6 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-[var(--towers-sky)] to-transparent" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Centre line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(75,156,211,0.4)] to-transparent hidden md:block" />

          <div className="space-y-12">
            {[
              {
                year: "1965",
                title: "Towers Hall Founded",
                content:
                  "Towers Hall officially opens as one of the premier student accommodations at Loughborough University. With its iconic towers visible across campus, it quickly becomes a landmark of student life.",
                side: "left",
                icon: "🏛️",
              },
              {
                year: "1980s",
                title: "The Tiger Becomes Our Symbol",
                content:
                  "The Towers white tiger mascot becomes firmly embedded in the hall's identity — a symbol of pride, strength and community spirit that continues to define Towers culture today.",
                side: "right",
                icon: "🐯",
              },
              {
                year: "2000s",
                title: "A Hub of Campus Life",
                content:
                  "Towers grows into one of the most vibrant social hubs on campus. Hall events, wardens' nights, and charity drives cement the hall's reputation for community and inclusivity.",
                side: "left",
                icon: "🎉",
              },
              {
                year: "2024",
                title: "60 Years of Towers",
                content:
                  "Towers Hall celebrates 60 years of being a home away from home. A special 60th anniversary logo was created to mark this milestone — a testament to decades of student memories.",
                side: "right",
                icon: "🎂",
              },
              {
                year: "2026",
                title: "New Committee, New Chapter",
                content:
                  "The 2026/27 committee takes the helm, led by Hall Chair Ciaran 'Ryu' Nishimura-Harrison, continuing the proud tradition of student-led governance and community excellence.",
                side: "left",
                icon: "✨",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  item.side === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Card */}
                <div className="flex-1 max-w-md">
                  <div className="glass-card p-6 rounded-2xl event-card border border-[rgba(75,156,211,0.1)]">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="towers-label text-[var(--towers-gold)] text-xs tracking-[0.2em]">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="towers-heading text-xl text-white mb-3">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.content}</p>
                  </div>
                </div>

                {/* Centre dot */}
                <div className="hidden md:flex w-10 h-10 rounded-full border-2 border-[var(--towers-sky)] bg-[var(--towers-navy)] items-center justify-center flex-shrink-0 z-10 blue-glow">
                  <div className="w-3 h-3 rounded-full bg-[var(--towers-sky)]" />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Constitution note */}
        <div className="mt-16 glass-card-dark rounded-2xl p-8 border border-[rgba(201,168,76,0.1)] text-center">
          <div className="text-3xl mb-4">📜</div>
          <h3 className="towers-heading text-xl text-white mb-3">Hall Constitution</h3>
          <p className="text-white/50 text-sm mb-4">
            The values, structure and governance of Towers Hall are enshrined in our Hall Constitution — written by students, for students.
          </p>
          <span className="text-xs text-white/30 tracking-widest uppercase">Towers Hall Constitution — Updated 26/27</span>
        </div>
      </div>
    </section>
  );
}
