import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const ScrollRevealImage = ({
  src,
  alt,
  animated = true,
}) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "center center"],
  });

  /*
   * Reveal progress
   *
   * 20% → 40% → 100%
   *
   * We convert this into an inset
   * from ALL FOUR SIDES.
   */
  const revealInset = useTransform(
    scrollYProgress,
    [0, 0.35, 0.75, 1],
    [40, 30, 15, 0]
  );

  /*
   * ALL FOUR SIDES move together.
   *
   * Example:
   *
   * inset(40% 40% 40% 40%)
   *
   * →
   *
   * inset(30% 30% 30% 30%)
   *
   * →
   *
   * inset(15% 15% 15% 15%)
   *
   * →
   *
   * inset(0% 0% 0% 0%)
   */
  const clipPath = useTransform(
    revealInset,
    (value) =>
      `inset(${value}% ${value}% ${value}% ${value}%)`
  );

  /*
   * Image movement / zoom.
   */
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.12, 1.06, 1]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [12, 0]
  );

  return (
    <div
      ref={containerRef}
      className="
        absolute
        inset-0
        overflow-hidden
        bg-white
      "
    >
      {/* REVEAL MASK */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: animated
            ? clipPath
            : "inset(0% 0% 0% 0%)",
        }}
      >
        {/* IMAGE */}
        <motion.img
          src={src}
          alt={alt}
          style={{
            scale: animated ? scale : 1,
            y: animated ? y : 0,
          }}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            will-change-transform
          "
        />
      </motion.div>
    </div>
  );
};

export default ScrollRevealImage;