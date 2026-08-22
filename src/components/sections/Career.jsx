import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const CareerPage = () => {
  /* ================================================================
     PAGE
  ================================================================= */

  const pageRef = useRef(null);

  /* ================================================================
     HERO
  ================================================================= */

  const heroRef = useRef(null);
  const heroImageRef = useRef(null);
  const heroOverlayRef = useRef(null);
  const heroContentRef = useRef(null);

  /* ================================================================
     VISION
  ================================================================= */

  const visionRef = useRef(null);

  // Fixed 50% image container
  const visionImageRef = useRef(null);

  // Actual image inside container
  const visionImageInnerRef = useRef(null);

  // Fixed 50% content container
  const visionContentRef = useRef(null);

  // Actual content inside container
  const visionContentInnerRef = useRef(null);

  /* ================================================================
     CTA
  ================================================================= */

  const ctaRef = useRef(null);
  const ctaHeadingRef = useRef(null);
  const ctaContentRef = useRef(null);
  const ctaButtonRef = useRef(null);

  /* ================================================================
     LEGACY
  ================================================================= */

  const legacyRef = useRef(null);
  const legacyImageRef = useRef(null);
  const legacyOverlayRef = useRef(null);
  const legacyContentRef = useRef(null);

  /* ================================================================
     GSAP
  ================================================================= */

  useLayoutEffect(() => {
    /* ==============================================================
       LENIS
    ============================================================== */

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1,
    });

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    /* ==============================================================
       GSAP CONTEXT
    ============================================================== */

    const ctx = gsap.context(() => {
      /* ============================================================
         PHASE 02 — HERO
      ============================================================ */

      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,

          start: "top top",
          end: "bottom top",

          scrub: 1.2,

          pin: true,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      /*
      ---------------------------------------------------------------
      HERO IMAGE
      ---------------------------------------------------------------
      */

      heroTimeline.fromTo(
        heroImageRef.current,
        {
          scale: 1.08,
          yPercent: 0,
        },
        {
          scale: 0.96,
          yPercent: -4,

          ease: "none",
        },
        0
      );

      /*
      ---------------------------------------------------------------
      HERO OVERLAY
      ---------------------------------------------------------------
      */

      heroTimeline.fromTo(
        heroOverlayRef.current,
        {
          opacity: 0.08,
        },
        {
          opacity: 0.3,

          ease: "none",
        },
        0
      );

      /*
      ---------------------------------------------------------------
      HERO CONTENT
      ---------------------------------------------------------------
      */

      heroTimeline.fromTo(
        heroContentRef.current,
        {
          y: 0,
          opacity: 1,
        },
        {
          y: -80,
          opacity: 0,

          ease: "none",
        },
        0
      );

      /* ============================================================
         PHASE 03 — VISION
         
         IMPORTANT:
         
         NO horizontal movement of the actual 50% containers.
         
         Only clip-path + inner transform is animated.
         
         Therefore:
         
         IMAGE  = ALWAYS LEFT 50%
         VISION = ALWAYS RIGHT 50%
         
         They can NEVER overlap.
      ============================================================ */

      const visionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: visionRef.current,

          start: "top top",

          /*
           * Animation gets enough scrolling distance
           * to feel cinematic.
           */
          end: "+=110%",

          scrub: 1,

          pin: true,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      /* ============================================================
         IMAGE REVEAL
         
         Initial:
         
         ┌───────────────┐
         │         IMAGE │
         │               │
         │               │
         └───────────────┘
         
         The visible portion starts from RIGHT.
         
         Then it reveals toward LEFT.
         
         No actual container movement.
      ============================================================ */

      visionTimeline.fromTo(
        visionImageRef.current,
        {
          clipPath: "inset(0 0 0 100%)",
        },
        {
          clipPath: "inset(0 0 0 0%)",

          ease: "none",
        },
        0
      );

      /* ============================================================
         IMAGE INTERNAL MOVEMENT
         
         Adds the feeling that image itself is moving
         RIGHT → LEFT without crossing its 50% boundary.
      ============================================================ */

      visionTimeline.fromTo(
        visionImageInnerRef.current,
        {
          scale: 1.08,
          xPercent: 8,
        },
        {
          scale: 1,
          xPercent: 0,

          ease: "none",

          force3D: true,
        },
        0
      );

      /* ============================================================
         VISION CONTENT REVEAL
         
         Initial:
         
         content is hidden from LEFT.
         
         Then reveals:
         
         LEFT → RIGHT
         
         Again, container itself never moves.
      ============================================================ */

      visionTimeline.fromTo(
        visionContentRef.current,
        {
          clipPath: "inset(0 100% 0 0)",
        },
        {
          clipPath: "inset(0 0% 0 0)",

          ease: "none",
        },
        0
      );

      /* ============================================================
         VISION CONTENT INTERNAL MOVEMENT
         
         Small LEFT → RIGHT movement.
         
         It stays inside the right 50%.
      ============================================================ */

      visionTimeline.fromTo(
        visionContentInnerRef.current,
        {
          xPercent: -8,
        },
        {
          xPercent: 0,

          ease: "none",

          force3D: true,
        },
        0
      );

      /* ============================================================
         PHASE 04 — CAREER CTA
      ============================================================ */

      const ctaTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ctaRef.current,

          start: "top bottom",

          end: "center center",

          scrub: 1,

          invalidateOnRefresh: true,
        },
      });

      /*
      ---------------------------------------------------------------
      CTA SECTION
      ---------------------------------------------------------------
      */

      ctaTimeline.fromTo(
        ctaRef.current,
        {
          yPercent: 10,
        },
        {
          yPercent: 0,

          ease: "none",
        },
        0
      );

      /*
      ---------------------------------------------------------------
      CTA HEADING
      ---------------------------------------------------------------
      */

      ctaTimeline.fromTo(
        ctaHeadingRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,

          ease: "power3.out",
        },
        0.1
      );

      /*
      ---------------------------------------------------------------
      CTA CONTENT
      ---------------------------------------------------------------
      */

      ctaTimeline.fromTo(
        ctaContentRef.current,
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,

          ease: "power3.out",
        },
        0.18
      );

      /*
      ---------------------------------------------------------------
      CTA BUTTON
      ---------------------------------------------------------------
      */

      ctaTimeline.fromTo(
        ctaButtonRef.current,
        {
          scale: 0.85,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,

          ease: "back.out(1.5)",
        },
        0.3
      );

      /* ============================================================
         PHASE 05 — LEGACY
      ============================================================ */

      const legacyTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: legacyRef.current,

          start: "top bottom",

          end: "bottom top",

          scrub: 1.2,

          invalidateOnRefresh: true,
        },
      });

      /*
      ---------------------------------------------------------------
      LEGACY IMAGE
      ---------------------------------------------------------------
      */

      legacyTimeline.fromTo(
        legacyImageRef.current,
        {
          scale: 1.15,
          yPercent: 3,
        },
        {
          scale: 1,
          yPercent: -3,

          ease: "none",
        },
        0
      );

      /*
      ---------------------------------------------------------------
      LEGACY OVERLAY
      ---------------------------------------------------------------
      */

      legacyTimeline.fromTo(
        legacyOverlayRef.current,
        {
          opacity: 0.1,
        },
        {
          opacity: 0.45,

          ease: "none",
        },
        0
      );

      /*
      ---------------------------------------------------------------
      LEGACY CONTENT
      ---------------------------------------------------------------
      */

      legacyTimeline.fromTo(
        legacyContentRef.current,
        {
          y: 70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,

          ease: "power3.out",
        },
        0.15
      );

      /* ============================================================
         PHASE 06 — LABEL ANIMATIONS
      ============================================================ */

      gsap.utils
        .toArray(".career-section-label")
        .forEach((label) => {
          gsap.fromTo(
            label,
            {
              letterSpacing: "0.5em",
              opacity: 0,
            },
            {
              letterSpacing: "0.28em",
              opacity: 1,

              scrollTrigger: {
                trigger: label,

                start: "top 85%",

                end: "top 55%",

                scrub: 1,
              },
            }
          );
        });

      /* ============================================================
         PHASE 07 — RESPONSIVE
      ============================================================ */

      const mm = gsap.matchMedia();

      /* ============================================================
         DESKTOP
      ============================================================ */

      mm.add("(min-width: 768px)", () => {
        /*
        -------------------------------------------------------------
        IMAGE ALWAYS 50%
        -------------------------------------------------------------
        */

        gsap.set(visionImageRef.current, {
          width: "50vw",
          height: "100vh",
        });

        /*
        -------------------------------------------------------------
        CONTENT ALWAYS 50%
        -------------------------------------------------------------
        */

        gsap.set(visionContentRef.current, {
          width: "50vw",
          height: "100vh",
        });
      });

      /* ============================================================
         MOBILE
         
         Still 50 / 50 as requested.
      ============================================================ */

      mm.add("(max-width: 767px)", () => {
        /*
        -------------------------------------------------------------
        HERO
        -------------------------------------------------------------
        */

        gsap.set(heroImageRef.current, {
          scale: 1.05,
        });

        /*
        -------------------------------------------------------------
        VISION IMAGE
        -------------------------------------------------------------
        */

        gsap.set(visionImageRef.current, {
          width: "50vw",
          height: "100vh",
        });

        /*
        -------------------------------------------------------------
        VISION CONTENT
        -------------------------------------------------------------
        */

        gsap.set(visionContentRef.current, {
          width: "50vw",
          height: "100vh",
        });

        /*
        -------------------------------------------------------------
        LEGACY
        -------------------------------------------------------------
        */

        gsap.fromTo(
          legacyImageRef.current,
          {
            scale: 1.08,
          },
          {
            scale: 1,

            ease: "none",

            scrollTrigger: {
              trigger: legacyRef.current,

              start: "top bottom",

              end: "bottom top",

              scrub: 1,
            },
          }
        );
      });

      /* ============================================================
         REFRESH
      ============================================================ */

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, pageRef);

    /* ==============================================================
       CLEANUP
    ============================================================== */

    return () => {
      cancelAnimationFrame(rafId);

      ctx.revert();

      lenis.destroy();

      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <main
      ref={pageRef}
      className="
        relative
        w-full
        overflow-x-hidden
        bg-white
        text-[#252323]
      "
    >
      {/* ==============================================================
          PHASE 02 — HERO
      ============================================================== */}

      <section
        ref={heroRef}
        className="
          relative
          h-screen
          w-full
          overflow-hidden
          bg-black
        "
      >
        {/* HERO IMAGE */}

        <img
          ref={heroImageRef}
          src="/image/hero.jpg"
          alt="Career"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
            will-change-transform
            transform-gpu
          "
        />

        {/* HERO OVERLAY */}

        <div
          ref={heroOverlayRef}
          className="
            pointer-events-none
            absolute
            inset-0
            z-10
            bg-black
          "
        />

        {/* HERO CONTENT */}

        <div
          ref={heroContentRef}
          className="
            absolute
            inset-0
            z-20
            flex
            items-center
            justify-center
            px-6
            text-center
            text-white
          "
        >
          <div className="max-w-5xl">
            {/*

            If you want hero text, uncomment this.

            <p
              className="
                career-section-label
                mb-6
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-white/70
                sm:text-xs
              "
            >
              Careers
            </p>

            <h1
              className="
                text-5xl
                font-light
                leading-[0.95]
                tracking-[-0.04em]
                sm:text-6xl
                md:text-8xl
                lg:text-[9rem]
              "
            >
              Shape the
              <br />
              extraordinary.
            </h1>

            */}
          </div>
        </div>

        {/* SCROLL INDICATOR */}

        <div
          className="
            absolute
            bottom-8
            left-1/2
            z-30
            flex
            -translate-x-1/2
            flex-col
            items-center
            gap-3
            text-white
          "
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-white/60
            "
          >
            Scroll
          </span>

          <div
            className="
              h-10
              w-px
              overflow-hidden
              bg-white/20
            "
          >
            <div
              className="
                h-full
                w-full
                origin-top
                animate-[scrollLine_1.8s_ease-in-out_infinite]
                bg-white
              "
            />
          </div>
        </div>
      </section>

      {/* ==============================================================
          PHASE 03 — VISION

          IMPORTANT STRUCTURE:

          WHITE BACKGROUND
          ├── LEFT 50%  = IMAGE
          └── RIGHT 50% = CONTENT

          These two containers NEVER MOVE.

          Only clip-path and their inner content move.

          Therefore they can NEVER overlap.
      ============================================================== */}

      <section
        ref={visionRef}
        className="
          relative
          h-screen
          w-full
          overflow-hidden
          bg-white
        "
      >
        {/* ============================================================
            PERMANENT WHITE BACKGROUND
        ============================================================ */}

        <div
          className="
            absolute
            inset-0
            z-0
            h-full
            w-full
            bg-white
          "
        />

        {/* ============================================================
            LEFT — IMAGE 50%
        ============================================================ */}

        <div
          ref={visionImageRef}
          className="
            absolute
            left-0
            top-0
            z-10
            h-full
            w-1/2
            overflow-hidden
            bg-white
            will-change-[clip-path]
          "
        >
          {/* ACTUAL IMAGE */}

          <img
            ref={visionImageInnerRef}
            src="/image/vision.jpg"
            alt="Our Vision"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              will-change-transform
              transform-gpu
            "
          />
        </div>

        {/* ============================================================
            RIGHT — VISION 50%
        ============================================================ */}

        <div
          ref={visionContentRef}
          className="
            absolute
            right-0
            top-0
            z-20
            h-full
            w-1/2
            overflow-hidden
            bg-white
            will-change-[clip-path]
          "
        >
          {/* ACTUAL CONTENT */}

          <div
            ref={visionContentInnerRef}
            className="
              flex
              h-full
              w-full
              items-center
              px-5
              sm:px-8
              md:px-10
              lg:px-14
              xl:px-20
              will-change-transform
              transform-gpu
            "
          >
            <div className="w-full max-w-[700px]">
              {/* LABEL */}

              <p
                className="
                  mb-5
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  text-[#722838]
                  sm:text-[10px]
                  sm:tracking-[0.3em]
                  md:text-xs
                "
              >
                Our Vision
              </p>

              {/* HEADING */}

              <h2
                className="
                  text-2xl
                  font-light
                  leading-[1.05]
                  tracking-[-0.035em]
                  text-[#722838]
                  sm:text-3xl
                  md:text-4xl
                  lg:text-5xl
                  xl:text-[4.3rem]
                "
              >
                We believe
                <br />
                great spaces
                <br />
                begin with
                <br />
                great people.
              </h2>

              {/* DESCRIPTION */}

              <div
                className="
                  mt-5
                  max-w-[620px]
                  space-y-3
                  text-[11px]
                  leading-5
                  text-black/60
                  sm:mt-6
                  sm:text-xs
                  sm:leading-6
                  md:mt-7
                  md:text-sm
                  md:leading-7
                "
              >
                <p>
                  We bring together creative thinkers,
                  designers and professionals who believe
                  in creating work with meaning.
                </p>

                <p>
                  Our culture is built around curiosity,
                  collaboration and the courage to challenge
                  what already exists.
                </p>

                <p>
                  Every project is an opportunity to create
                  something exceptional — and every person
                  has a role in shaping that journey.
                </p>
              </div>

              {/* LINK */}

              <div className="mt-6 sm:mt-8">
                <a
                  href="#career-cta"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-black
                    sm:text-[10px]
                    sm:tracking-[0.25em]
                  "
                >
                  Discover our culture

                  <span
                    className="
                      inline-flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-black/30
                      text-xs
                      transition-all
                      duration-500
                      group-hover:translate-x-1
                      group-hover:bg-black
                      group-hover:text-white
                      sm:h-8
                      sm:w-8
                    "
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          PHASE 04 — CAREER CTA
      ============================================================== */}

      <section
        id="career-cta"
        ref={ctaRef}
        className="
          relative
          min-h-screen
          w-full
          overflow-hidden
          bg-[#722838]
          text-white
        "
      >
        {/* DECORATION */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-[500px]
            w-[500px]
            rounded-full
            border
            border-white/10
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-40
            -left-40
            h-[600px]
            w-[600px]
            rounded-full
            border
            border-white/10
          "
        />

        {/* CTA CONTENT */}

        <div
          className="
            relative
            z-10
            flex
            min-h-screen
            w-full
            items-center
            justify-center
            px-6
            py-24
            text-center
          "
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center">
            {/* HEADING */}

            <h2
              ref={ctaHeadingRef}
              className="
                text-4xl
                font-normal
                leading-tight
                tracking-wide
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Craft a Career in Luxury Design
            </h2>

            {/* CONTENT */}

            <div
              ref={ctaContentRef}
              className="
                mx-auto
                mt-8
                flex
                flex-col
                items-center
              "
            >
              <p
                className="
                  text-sm
                  font-light
                  tracking-wide
                  text-white
                  md:text-base
                "
              >
                Be part of a team that transforms ideas into
                iconic experiences.
              </p>

              {/* BUTTON */}

              <button
                ref={ctaButtonRef}
                className="
                  mt-10
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-8
                  py-3
                  text-sm
                  text-[#722838]
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Apply Now ↗
              </button>

              {/* EMAIL */}

              <p
                className="
                  mt-14
                  text-sm
                  font-light
                  tracking-wide
                  text-white
                "
              >
                Mail your resume and portfolio to :{" "}
                <a
                  href="mailto:careers@aparnakaushik.com"
                  className="
                    underline
                    underline-offset-4
                    transition-opacity
                    hover:opacity-70
                  "
                >
                  careers@aparnakaushik.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          PHASE 05 — LEGACY
      ============================================================== */}

      <section
        ref={legacyRef}
        className="
          relative
          h-screen
          min-h-[650px]
          w-full
          overflow-hidden
          bg-black
        "
      >
        {/* IMAGE */}

        <img
          ref={legacyImageRef}
          src="/image/legacy.jpg"
          alt="Our Legacy"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
            will-change-transform
            transform-gpu
          "
        />

        {/* OVERLAY */}

        <div
          ref={legacyOverlayRef}
          className="
            absolute
            inset-0
            bg-black
          "
        />

        {/* CONTENT */}

        <div
          ref={legacyContentRef}
          className="
            relative
            z-10
            flex
            h-full
            w-full
            items-center
            justify-center
            px-6
            text-center
            text-white
            will-change-transform
          "
        >
          <div className="max-w-6xl">
            {/* LABEL */}

            <p
              className="
                career-section-label
                mb-6
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/60
                sm:text-xs
              "
            >
              Our Legacy
            </p>

            {/* HEADING */}

            <h2
              className="
                text-4xl
                font-light
                uppercase
                leading-[1.05]
                tracking-[-0.025em]
                sm:text-5xl
                md:text-7xl
                lg:text-[6.5rem]
              "
            >
              A legacy of
              <br />
              extraordinary spaces.
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mx-auto
                mt-7
                max-w-2xl
                text-sm
                leading-7
                text-white/65
                md:text-base
              "
            >
              More than 300 ultra-luxury residences delivered
              across India, the UAE and the world — and a
              future waiting to be shaped by the next generation.
            </p>

            {/* BUTTON */}

            <div className="mt-8">
              <a
                href="#career-cta"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  rounded-full
                  border
                  border-white/40
                  px-7
                  py-3
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  transition-all
                  duration-500
                  hover:border-white
                  hover:bg-white
                  hover:text-black
                "
              >
                Become part of it

                <span
                  className="
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          FINAL WHITE SECTION
      ============================================================== */}

      <section
        className="
          relative
          flex
          min-h-[45vh]
          w-full
          items-center
          justify-center
          overflow-hidden
          bg-white
          px-6
          text-center
        "
      >
        <div>
          <p
            className="
              career-section-label
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-black/40
              sm:text-xs
            "
          >
            Your next chapter starts here
          </p>

          <a
            href="#career-cta"
            className="
              mt-5
              inline-block
              text-2xl
              font-light
              tracking-[-0.02em]
              transition-opacity
              duration-300
              hover:opacity-50
              sm:text-4xl
              md:text-6xl
            "
          >
            Let's create something extraordinary.
          </a>
        </div>
      </section>

      {/* ==============================================================
          CSS
      ============================================================== */}

      <style>{`
        /*
        ================================================================
        SCROLL INDICATOR
        ================================================================
        */

        @keyframes scrollLine {
          0% {
            transform: scaleY(0);
            transform-origin: top;
          }

          45% {
            transform: scaleY(1);
            transform-origin: top;
          }

          55% {
            transform: scaleY(1);
            transform-origin: bottom;
          }

          100% {
            transform: scaleY(0);
            transform-origin: bottom;
          }
        }

        /*
        ================================================================
        TEXT RENDERING
        ================================================================
        */

        .career-section-label,
        h1,
        h2,
        h3,
        p,
        a,
        button {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /*
        ================================================================
        GPU
        ================================================================
        */

        .transform-gpu {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          perspective: 1000px;
        }

        /*
        ================================================================
        LENIS
        ================================================================
        */

        html.lenis {
          height: auto;
        }

        .lenis.lenis-smooth {
          scroll-behavior: auto !important;
        }

        .lenis.lenis-smooth [data-lenis-prevent] {
          overscroll-behavior: contain;
        }

        .lenis.lenis-stopped {
          overflow: hidden;
        }

        /*
        ================================================================
        GLOBAL HORIZONTAL OVERFLOW
        ================================================================
        */

        html,
        body {
          max-width: 100%;
          overflow-x: hidden;
        }

        /*
        ================================================================
        REDUCED MOTION
        ================================================================
        */

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
};

export default CareerPage;