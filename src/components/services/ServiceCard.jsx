import { Link } from "react-router-dom";
import ScrollRevealImage from "./ScrollRevealImage";

const ServiceCard = ({ service, index }) => {
  /*
   * First two cards don't use the
   * special scroll reveal.
   */
  const animated = index >= 2;

  return (
    <Link
      to={`/services/${service.slug}`}
      className={`
        group
        relative
        block
        overflow-hidden
        bg-neutral-900
        ${service.fullWidth ? "md:aspect-[2.4/1]" : "aspect-[4/3]"}
      `}
    >
      {/* IMAGE */}
      <ScrollRevealImage
        src={service.image}
        alt={service.title}
        animated={animated}
      />

      {/* DARK OVERLAY */}
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

      {/* BOTTOM GRADIENT */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[3]
          h-[55%]
          bg-gradient-to-t
          from-black/70
          via-black/20
          to-transparent
        "
      />

      {/* CONTENT */}
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
        "
      >
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
          {service.title}
        </h2>

        <div
          className="
            mt-3
            flex
            items-center
            gap-2
            text-[10px]
            uppercase
            tracking-[0.22em]
            text-white/75
            opacity-0
            translate-y-3
            transition-all
            duration-700
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <span>Learn More</span>

          <span
            className="
              text-sm
              transition-transform
              duration-500
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;