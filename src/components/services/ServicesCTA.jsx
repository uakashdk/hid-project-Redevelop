import { Link } from "react-router-dom";

const ServicesCTA = () => {
  return (
    <section className="bg-[#8B0035] px-6 py-24 text-white md:px-10 md:py-32 lg:px-16">

      <div className="mx-auto max-w-5xl text-center">

        <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/70 md:text-sm">
          Let's Create Something Together
        </p>

        <h2 className="text-4xl font-medium leading-tight md:text-6xl lg:text-7xl">
          Have a project in mind?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
          Tell us about your idea and let's create something meaningful,
          memorable and uniquely yours.
        </p>

        <Link
          to="/contact"
          className="
            mt-10
            inline-flex
            border
            border-white
            px-8
            py-4
            text-xs
            font-medium
            uppercase
            tracking-[0.2em]
            transition-colors
            duration-300
            hover:bg-white
            hover:text-[#8B0035]
          "
        >
          Let's Talk
        </Link>

      </div>

    </section>
  );
};

export default ServicesCTA;