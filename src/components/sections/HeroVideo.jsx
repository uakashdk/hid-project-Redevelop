import { useState, useEffect } from "react";
import { motion } from "motion/react";

const logo = "/Images/logo.png";

function HeroVideo() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Reveal logo at 1/4th centered position after 4 seconds
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-950">
      {/* BACKGROUND VIDEO */}
      <video
        src="/videos/HIDvideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* OVERLAY GRADIENT FOR LEGBILITY */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />

      {/* 4-SECOND LOGO ANIMATION (CENTERED AT 1/4TH HEIGHT) */}
      {showLogo && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none text-center"
        >
          {/* <img
            src={logo}
            alt="HID Studio"
            className="w-40 md:w-56 object-contain filter drop-shadow-2xl brightness-125"
          /> */}
        </motion.div>
      )}

      {/* BOTTOM HERO CAPTIONS & NAVBAR TRIGGER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 4.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:px-12 md:pb-24 lg:px-20"
      >
        <div className="mx-auto max-w-7xl w-full flex flex-col md:flex-row justify-between items-end gap-6 text-white">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/70 font-medium mb-3">
              Architecture · Interiors · Furniture
            </p>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] font-light uppercase leading-[0.95] tracking-tight">
              Iconic Spaces <br /> Timeless Form
            </h1>
          </div>

          <div className="hidden md:block max-w-xs text-right">
            <p className="text-xs uppercase tracking-[0.2em] leading-relaxed text-white/80 font-light">
              Crafting ultra-luxury private estates, architectural landmarks, and bespoke environments.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroVideo;
