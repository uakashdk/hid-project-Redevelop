import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import PageTransition from "../components/layout/PageTransition";

function AboutUs() {
  /*
   * ============================================================
   * SECTION 2
   * SCROLL TARGET
   * ============================================================
   *
   * This ref belongs ONLY to Section 2.
   *
   * Section 1:
   * - normal scrolling
   *
   * Section 2:
   * - controlled scroll animation
   *
   * Section 3:
   * - normal scrolling after Section 2 completes
   */

  const section2Ref = useRef(null);

  /*
   * ============================================================
   * SECTION 2 SCROLL PROGRESS
   * ============================================================
   *
   * progress = 0
   * -> Section 2 animation starts
   *
   * progress = 1
   * -> Section 2 scroll area is finished
   *
   * IMPORTANT:
   *
   * The actual image/text animation finishes around 60%.
   *
   * From 60% -> 100%, the final 50/50 layout remains completely
   * static while the user continues scrolling.
   *
   * This prevents Section 3 from appearing before Section 2
   * reaches its final state.
   */

  const { scrollYProgress } = useScroll({
    target: section2Ref,
    offset: ["start start", "end end"],
  });

  /*
   * ============================================================
   * IMAGE REVEAL
   * ============================================================
   *
   * Image is revealed from LEFT -> RIGHT.
   *
   * 0% progress
   * -> only around 10% of image visible
   *
   * 10%
   * -> 20% visible
   *
   * 22%
   * -> 40% visible
   *
   * 35%
   * -> 60% visible
   *
   * 48%
   * -> 80% visible
   *
   * 60%
   * -> 100% visible
   *
   * 60% -> 100%
   * -> image remains completely visible
   */

  const imageClipRight = useTransform(
    scrollYProgress,
    [0, 0.1, 0.22, 0.35, 0.48, 0.6],
    [90, 80, 60, 40, 20, 0]
  );

  /*
   * Convert percentage into clip-path.
   *
   * inset(
   *   top
   *   right
   *   bottom
   *   left
   * )
   *
   * Right side is progressively removed from 90% -> 0%.
   */

  const imageClipPath = useTransform(
    imageClipRight,
    (value) => `inset(0% ${value}% 0% 0%)`
  );

  /*
   * ============================================================
   * IMAGE SCALE
   * ============================================================
   *
   * Slight zoom at the beginning.
   *
   * Gradually settles to normal scale.
   */

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.18, 0.38, 0.6],
    [1.14, 1.1, 1.04, 1]
  );

  /*
   * ============================================================
   * IMAGE OPACITY
   * ============================================================
   *
   * Very subtle fade-in.
   */

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.18],
    [0.35, 0.75, 1]
  );

  /*
   * ============================================================
   * RIGHT CONTENT
   * OPACITY
   * ============================================================
   *
   * Content doesn't appear immediately.
   *
   * It begins after the image has already started opening.
   *
   * At 0.55:
   * content = completely visible.
   *
   * After that:
   * content stays visible.
   */

  const contentOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.2, 0.38, 0.55],
    [0, 0.2, 0.7, 1]
  );

  /*
   * ============================================================
   * RIGHT CONTENT
   * HORIZONTAL MOVEMENT
   * ============================================================
   *
   * Text starts outside the right side.
   *
   * Then slowly moves toward its final position.
   */

  const contentX = useTransform(
    scrollYProgress,
    [0.08, 0.2, 0.38, 0.55],
    [150, 100, 35, 0]
  );

  /*
   * ============================================================
   * RIGHT CONTENT
   * BLUR
   * ============================================================
   *
   * Slight blur while the content is entering.
   *
   * Becomes completely sharp when finished.
   */

  const contentBlur = useTransform(
    scrollYProgress,
    [0.08, 0.2, 0.38, 0.55],
    [7, 5, 2, 0]
  );

  const contentFilter = useTransform(
    contentBlur,
    (value) => `blur(${value}px)`
  );

  return (
    <PageTransition>
      {/*
       * IMPORTANT:
       *
       * Do NOT use overflow-hidden here.
       *
       * overflow-hidden on an ancestor can interfere with
       * position: sticky.
       *
       * overflow-x-clip prevents horizontal overflow without
       * creating the same scrolling-container behavior.
       */}

      <main className="page-content bg-[#f5f2ec] overflow-x-clip">

        {/* ============================================================
            SECTION 1
            HERO VIDEO
            ============================================================ */}

        <section
          className="
            relative
            z-10
            h-screen
            w-full
            overflow-hidden
            bg-neutral-900
          "
        >
          {/* Background Video */}

          <video
            src="/videos/HIDvideo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />

          {/* Dark Overlay */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-b
              from-black/60
              via-black/20
              to-black/70
            "
          />

          {/* Hero Content */}

          <div
            className="
              relative
              z-10
              flex
              h-full
              flex-col
              justify-end
              px-6
              pb-20
              md:px-12
              md:pb-28
              lg:px-20
            "
          >
            <div className="mx-auto w-full max-w-7xl">

              {/* Small Heading */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
                className="
                  mb-4
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-white/80
                  md:text-sm
                "
              >
                About HID Studio
              </motion.p>

              {/* Main Heading */}

              <div className="overflow-hidden">

                <motion.h1
                  initial={{
                    y: "100%",
                  }}
                  animate={{
                    y: 0,
                  }}
                  transition={{
                    duration: 1.1,
                    delay: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    text-4xl
                    font-medium
                    uppercase
                    leading-[0.95]
                    tracking-[-0.03em]
                    text-white
                    sm:text-6xl
                    md:text-7xl
                    lg:text-[7.5rem]
                  "
                >
                  Architectural
                  <br />
                  Vision & Craft
                </motion.h1>

              </div>

            </div>
          </div>
        </section>


        {/* ============================================================
            SECTION 2
            WHO I AM
            ============================================================

            STRUCTURE:

            Section 2
            └── 300vh scroll area
                 │
                 └── sticky viewport
                      │
                      └── 50/50 grid
                           │
                           ├── LEFT
                           │    image reveal
                           │
                           └── RIGHT
                                lazy text entrance

            IMPORTANT:

            The GRID itself is already 50/50.

            We are NOT animating the grid width.

            Instead:
            - image is progressively revealed
            - text progressively enters

            Once both animations are complete, the 50/50 grid
            simply remains visible until Section 2 ends.
            ============================================================ */}

        <section
          ref={section2Ref}
          className="
            relative
            z-10
            h-[300vh]
            w-full
            bg-white
          "
        >

          {/* ==========================================================
              STICKY VIEWPORT
              ==========================================================

              This is the actual screen-sized animation area.

              It stays at the top while the user scrolls through
              the 300vh Section 2.
              ========================================================== */}

          <div
            className="
              sticky
              top-0
              h-screen
              w-full
              overflow-hidden
              bg-white
            "
          >

            {/* ========================================================
                50 / 50 GRID
                ======================================================== */}

            <div
              className="
                grid
                h-full
                w-full
                grid-cols-1
                lg:grid-cols-2
              "
            >

              {/* ======================================================
                  LEFT SIDE
                  IMAGE
                  ====================================================== */}

              <div
                className="
                  relative
                  h-full
                  min-h-0
                  w-full
                  overflow-hidden
                  bg-white
                "
              >

                {/*

                  The wrapper fills the entire left half.

                  clip-path controls how much of the image is visible.

                */}

                <motion.div
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    overflow-hidden
                  "
                  style={{
                    clipPath: imageClipPath,
                    opacity: imageOpacity,
                  }}
                >

                  <motion.img
                    src="/Images/founder.png"
                    alt="Tusar Sharma - Founder"
                    style={{
                      scale: imageScale,
                    }}
                    className="
                      block
                      h-full
                      w-full
                      object-cover
                      object-center
                      will-change-transform
                    "
                  />

                </motion.div>

              </div>


              {/* ======================================================
                  RIGHT SIDE
                  CONTENT
                  ====================================================== */}

              <div
                className="
                  relative
                  flex
                  h-full
                  min-h-0
                  w-full
                  items-center
                  overflow-hidden
                  bg-white
                  px-8
                  py-12
                  md:px-12
                  lg:px-16
                  xl:px-20
                "
              >

                {/*

                  This container is intentionally NOT sticky.

                  The parent viewport is sticky.

                  The content itself is only transformed by
                  scroll progress.

                */}

                <motion.div
                  style={{
                    opacity: contentOpacity,
                    x: contentX,
                    filter: contentFilter,
                  }}
                  className="
                    w-full
                    max-w-xl
                    will-change-transform
                  "
                >

                  <div className="space-y-8">

                    {/* ==================================================
                        HEADING
                        ================================================== */}

                    <h2
                      className="
                        text-4xl
                        font-serif
                        uppercase
                        tracking-tight
                        text-[#8B0035]
                        sm:text-5xl
                        md:text-6xl
                      "
                    >
                      WHO I AM
                    </h2>


                    {/* ==================================================
                        QUOTE
                        ================================================== */}

                    <div className="space-y-4">

                      <p
                        className="
                          text-lg
                          font-light
                          italic
                          leading-relaxed
                          text-neutral-600
                          md:text-xl
                        "
                      >
                        "Clarity of purpose and simplicity are the essence
                        of design. I design to accentuate the natural
                        qualities of a space; amplifying its particular
                        beauty through seamless functionality and unique
                        form."
                      </p>

                      <p
                        className="
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.25em]
                          text-[#8B0035]
                        "
                      >
                        — TUSAR SHARMA
                      </p>

                    </div>


                    {/* ==================================================
                        DIVIDER
                        ================================================== */}

                    <div className="h-px w-full bg-neutral-200" />


                    {/* ==================================================
                        DESCRIPTION
                        ================================================== */}

                    <div
                      className="
                        space-y-5
                        text-sm
                        font-light
                        leading-relaxed
                        text-neutral-600
                        md:text-base
                      "
                    >

                      <p>
                        Tusar Sharma is a leading architect and interior
                        designer of ultra-luxury estate homes globally.
                      </p>

                      <p>
                        His versatile projects span a comprehensive range
                        of luxury lifestyle creations. Infusing his
                        experimental processes with scientific clarity and
                        pragmatism, Tusar creates exemplary spaces that
                        range from awe-strikingly expansive to stylishly
                        intimate.
                      </p>

                      <p>
                        He is the founding principal and design director of
                        a design-and-build firm that works across
                        architecture, interiors, furniture, lighting,
                        product design, and landscaping. He has handled a
                        variety of projects including residences,
                        commercial developments, retail outlets,
                        restaurants, spas and clubs.
                      </p>

                    </div>

                  </div>

                </motion.div>

              </div>

            </div>

          </div>

        </section>


        {/* ============================================================
            SECTION 3
            LEGACY
            ============================================================ */}

        <section
          className="
            relative
            z-20
            min-h-[150vh]
            w-full
            bg-neutral-900
          "
        >

          <div
            className="
              sticky
              top-0
              flex
              h-screen
              w-full
              items-center
              justify-end
              overflow-hidden
              px-8
              md:px-16
              lg:px-24
            "
          >

            {/* ========================================================
                BACKGROUND IMAGE
                ======================================================== */}

            <img
              src="/Images/project2.png"
              alt="Ultra Luxury Residences Legacy"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                brightness-[0.8]
              "
            />


            {/* ========================================================
                OVERLAY
                ======================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-black/30
              "
            />


            {/* ========================================================
                CONTENT
                ======================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                margin: "-50px",
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                z-10
                max-w-2xl
                space-y-8
                text-left
                text-white
              "
            >

              {/* Legacy Heading */}

              <h2
                className="
                  text-2xl
                  font-light
                  uppercase
                  leading-tight
                  tracking-wider
                  text-white
                  drop-shadow-md
                  sm:text-3xl
                  md:text-4xl
                  lg:text-5xl
                "
              >
                A LEGACY OF 300+ ULTRA-LUXURY RESIDENCES DELIVERED
                ACROSS INDIA, THE UAE, AND THE WORLD.
              </h2>


              {/* Let's Connect */}

              <div>

                <Link
                  to="/contact-us"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#8B0035]
                    px-7
                    py-3.5
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-white
                    shadow-xl
                    transition-all
                    duration-500
                    hover:scale-105
                    hover:bg-white
                    hover:text-[#8B0035]
                  "
                >

                  <span>
                    Let's Connect
                  </span>

                  <span className="text-sm">
                    ↗
                  </span>

                </Link>

              </div>

            </motion.div>

          </div>

        </section>

      </main>
    </PageTransition>
  );
}

export default AboutUs;