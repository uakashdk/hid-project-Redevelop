import { motion } from "motion/react";

const ServicesHero = () => {
  return (
    <section className="overflow-hidden bg-white px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Small Label */}
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-6
            text-xs
            font-medium
            uppercase
            tracking-[0.3em]
            text-[#8B0035]
            md:text-sm
          "
        >
          What We Do
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
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              text-5xl
              font-medium
              uppercase
              leading-[0.9]
              tracking-[-0.04em]
              text-[#8B0035]
              sm:text-6xl
              md:text-7xl
              lg:text-[9rem]
            "
          >
            Our Services
          </motion.h1>

        </div>

        {/* Description */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 max-w-2xl"
        >
          <p
            className="
              text-sm
              leading-relaxed
              tracking-[0.08em]
              text-neutral-600
              md:text-base
            "
          >
            From iconic architecture to refined interiors, intelligent
            technology and carefully curated details, we create complete
            environments that are designed to be experienced.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesHero;