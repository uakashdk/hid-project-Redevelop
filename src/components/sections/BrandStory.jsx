import { Link } from "react-router-dom";

function BrandStory() {
  return (
    <section className="bg-white py-20 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="mx-auto max-w-7xl space-y-24 md:space-y-36">
        {/* ============================================================ */}
        {/* BLOCK 1: BRAND STORY */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: FEATURED IMAGE */}
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 shadow-xl">
            <img
              src="/Images/featured5.jpeg"
              alt="Brand Story - Architecture"
              className="h-full w-full object-cover"
            />
          </div>

          {/* RIGHT: CONTENT */}
          <div className="space-y-6 text-neutral-800">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight text-[#8B0035] uppercase">
              BRAND STORY
            </h2>

            <p className="text-lg md:text-xl font-light leading-relaxed text-neutral-600 italic">
              "Designing a home is like drawing a portrait of your client"
            </p>

            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold">
                KNOW US BETTER
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8B0035] font-medium">
                Iconic Architecture . Interior Design . Furniture
              </p>
            </div>

            <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed">
              The House of Aparna Kaushik is a fingerprint of the discerning visionary behind its inception. The architect and Founding Principal manifests an academically informed canon of work that blends European classicism with modernist tropical architecture.
            </p>

            <div className="pt-2">
              <Link
                to="/about-us"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-7
                  py-3.5
                  rounded-full
                  bg-[#8B0035]
                  text-white
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  font-medium
                  border
                  border-[#8B0035]
                  shadow-md
                  transition-all
                  duration-500
                  hover:bg-white
                  hover:text-black
                  hover:border-[#8B0035]
                "
              >
                <span>Read More</span>
                <span className="text-sm text-[#8B0035]">↗</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* BLOCK 2: PRINCIPAL ARCHITECT */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: CONTENT */}
          <div className="space-y-6 text-neutral-800 lg:order-1 order-2">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight text-[#8B0035] uppercase leading-none">
              PRINCIPAL <br /> ARCHITECT
            </h2>

            <p className="text-lg md:text-xl font-light leading-relaxed text-neutral-600 italic">
              "My designs are sincere, natural and unforced!"
            </p>

            <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed">
              For me, design is everything. Clarity of purpose and simplicity of line; purity of form and obsessive attention to detail. I strive for perfection. Tusar Sharma is one of the leading designers and builder of ultra luxury estate homes of all scales and lifestyle creations.
            </p>

            <div className="pt-2">
              <Link
                to="/about-us"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-7
                  py-3.5
                  rounded-full
                  bg-[#8B0035]
                  text-white
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  font-medium
                  border
                  border-[#8B0035]
                  shadow-md
                  transition-all
                  duration-500
                  hover:bg-white
                  hover:text-black
                  hover:border-[#8B0035]
                "
              >
                <span>Read More</span>
                <span className="text-sm text-[#8B0035]">↗</span>
              </Link>
            </div>
          </div>

          {/* RIGHT: PORTRAIT IMAGE */}
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 shadow-xl lg:order-2 order-1">
            <img
              src="/Images/founder.png"
              alt="Principal Architect"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandStory;
