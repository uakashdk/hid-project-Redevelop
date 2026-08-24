import projects from "../data/projects";
import Card from "../components/ui/Card";
import { motion } from "motion/react";

function Projects() {
  return (
    <div className="bg-[#f5f2ec] min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-white px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#8B0035] md:text-sm"
          >
            Portfolio
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl font-medium uppercase leading-[0.9] tracking-[-0.04em] text-[#8B0035] sm:text-6xl md:text-7xl lg:text-[8rem]"
            >
              Project Showcase
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-6 text-sm uppercase tracking-[0.25em] text-neutral-600 md:text-base font-light"
          >
            Iconic Architecture . Interior Design . Furniture
          </motion.p>
        </div>
      </section>

      {/* PROJECTS GRID SECTION */}
      <section className="w-full bg-[#f5f2ec] px-3 pb-16 pt-3 md:px-4 md:pb-24">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
          {projects.map((project, index) => (
            <div
              key={project.id || project.slug || index}
              className={project.fullWidth ? "md:col-span-2" : ""}
            >
              <Card
                project={project}
                index={index}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;