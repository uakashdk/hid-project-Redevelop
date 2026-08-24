import { Link } from "react-router-dom";
import ScrollRevealImage from "../services/ScrollRevealImage";

function ServicesGrid() {
  return (
    <section className="w-full bg-[#f5f2ec] py-20 md:py-28 overflow-hidden">
      {/* CENTRALIZED HEADING & SUBCONTENT */}
      <div className="mx-auto max-w-4xl px-6 text-center mb-16 md:mb-24">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight text-[#8B0035] mb-6">
          SERVICES
        </h2>
        <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed uppercase tracking-[0.15em] max-w-3xl mx-auto">
          Working across disciplines of architecture, interiors, furniture, lighting, product design, and landscaping, the dedicated team conceives and executes synergistic, forward-thinking, and visually striking projects.
        </p>
      </div>

      {/* FULL WIDTH IMAGE SHOWCASE 1 WITH SCROLL REVEAL */}
      <div className="w-full space-y-4 px-3 md:px-4">
        <Link
          to="/services/iconic-architecture"
          className="group relative block w-full aspect-[16/9] md:aspect-[2.4/1] overflow-hidden bg-neutral-900 shadow-2xl"
        >
          <ScrollRevealImage
            src="/Images/project1.png"
            alt="Iconic Architecture"
            animated={true}
          />
          <div className="pointer-events-none absolute inset-0 z-[2] bg-black/20 group-hover:bg-black/35 transition-colors duration-700" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[60%] bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="pointer-events-none absolute inset-0 z-[4] flex flex-col justify-end p-8 md:p-14 text-white">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70 font-medium mb-2">
              Architecture & Form
            </p>
            <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light uppercase tracking-tight leading-none group-hover:-translate-y-1 transition-transform duration-500">
              ICONIC ARCHITECTURE
            </h3>
          </div>
        </Link>

        {/* FULL WIDTH IMAGE SHOWCASE 2 WITH SCROLL REVEAL */}
        <Link
          to="/services/interior-design"
          className="group relative block w-full aspect-[16/9] md:aspect-[2.4/1] overflow-hidden bg-neutral-900 shadow-2xl"
        >
          <ScrollRevealImage
            src="/Images/project2.png"
            alt="Interior Design"
            animated={true}
          />
          <div className="pointer-events-none absolute inset-0 z-[2] bg-black/20 group-hover:bg-black/35 transition-colors duration-700" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[60%] bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="pointer-events-none absolute inset-0 z-[4] flex flex-col justify-end p-8 md:p-14 text-white">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70 font-medium mb-2">
              Interior Environments
            </p>
            <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light uppercase tracking-tight leading-none group-hover:-translate-y-1 transition-transform duration-500">
              INTERIOR DESIGN
            </h3>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default ServicesGrid;