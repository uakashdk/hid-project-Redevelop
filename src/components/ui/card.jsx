import { Link } from "react-router-dom";
import ScrollRevealImage from "../services/ScrollRevealImage";

function Card({ project, index = 0 }) {
  /*
   * First two grid images (index 0 & 1) don't use the animated scroll reveal.
   */
  const animated = index >= 2;

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`
        group
        relative
        block
        overflow-hidden
        bg-neutral-900
        ${project.fullWidth ? "md:aspect-[2.4/1] aspect-[4/3]" : "aspect-[4/3]"}
      `}
    >
      {/* IMAGE WITH SCROLL REVEAL */}
      <ScrollRevealImage
        src={project.image}
        alt={project.title}
        animated={animated}
      />

      {/* DARK OVERLAY ON HOVER */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          bg-black/10
          transition-colors
          duration-700
          group-hover:bg-black/25
        "
      />

      {/* GRADIENT FOR CONTRAST */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[3]
          h-[55%]
          bg-gradient-to-t
          from-black/80
          via-black/30
          to-transparent
        "
      />

      {/* CONTENT OVERLAY */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[4]
          p-6
          md:p-8
          lg:p-10
          flex
          justify-between
          items-end
        "
      >
        <div>
          {project.category && (
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/70 font-medium mb-1">
              {project.category}
            </p>
          )}

          <h2
            className="
              text-[clamp(1.5rem,2.7vw,3rem)]
              font-light
              leading-none
              tracking-[-0.02em]
              text-white
              transition-transform
              duration-700
              group-hover:-translate-y-1
            "
          >
            {project.title}
          </h2>
        </div>

        <div
          className="
            flex
            items-center
            gap-2
            text-[10px]
            uppercase
            tracking-[0.22em]
            text-white/80
            opacity-0
            translate-y-2
            transition-all
            duration-500
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <span>Explore</span>
          <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  );
}

export default Card;