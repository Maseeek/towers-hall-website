import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(75,156,211,0.1)] bg-[#040d1f] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/towers-logo.png"
                  alt="Towers Hall"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-white font-black text-xl tracking-widest">TOWERS</div>
                <div className="text-[var(--towers-sky)] text-[10px] tracking-[0.2em] uppercase">Hall — Loughborough University</div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              One of the biggest halls on campus with hands down the best views. Home to a thriving student community since 1965.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-12">
            <div>
              <div className="towers-label text-white/60 text-[10px] tracking-[0.2em] mb-4">Navigate</div>
              <div className="space-y-3">
                {["Events", "Committee", "Gallery", "History"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="towers-label text-white/60 text-[10px] tracking-[0.2em] mb-4">Connect</div>
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/towershall/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/50 hover:text-[var(--towers-sky)] text-sm transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.instagram.com/towershallims/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/50 hover:text-[var(--towers-sky)] text-sm transition-colors"
                >
                  IMS Instagram
                </a>
                <a
                  href="https://www.lboro.ac.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/50 hover:text-[var(--towers-sky)] text-sm transition-colors"
                >
                  Loughborough University
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Towers Hall, Loughborough University Students&apos; Union
          </p>
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6">
              <Image src="/images/crest.png" alt="Towers Crest" fill className="object-contain opacity-40" />
            </div>
            <span className="text-white/20 text-[10px] tracking-widest uppercase">Est. 1965</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
