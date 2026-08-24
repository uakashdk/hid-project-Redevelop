import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";
import { motion } from "motion/react";
import ScrollRevealImage from "../components/services/ScrollRevealImage";

function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f2ec] px-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-light uppercase tracking-widest text-[#8B0035]">
            Project Not Found
          </h1>
          <Link
            to="/projects"
            className="mt-6 inline-block text-xs uppercase tracking-[0.25em] text-neutral-700 border-b border-neutral-700 pb-1"
          >
            ← Back to Projects Showcase
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-[#f5f2ec] min-h-screen">
      {/* HEADER SECTION */}
      <section className="bg-white px-6 pt-36 pb-16 md:px-12 md:pt-44 md:pb-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-between items-center mb-6">
            <Link
              to="/projects"
              className="text-xs uppercase tracking-[0.25em] text-[#8B0035] font-medium flex items-center gap-2 hover:-translate-x-1 transition-transform duration-300"
            >
              ← Projects Showcase
            </Link>
            {project.category && (
              <span className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                {project.category}
              </span>
            )}
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] font-medium uppercase leading-[0.95] tracking-[-0.03em] text-[#8B0035]"
            >
              {project.title}
            </motion.h1>
          </div>

          {/* META BAR */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8 mt-8 pt-6 border-t border-neutral-200 text-xs uppercase tracking-[0.25em] text-neutral-600">
            {project.location && (
              <div>
                <span className="text-neutral-400 block mb-1">Location</span>
                <span>{project.location}</span>
              </div>
            )}
            {project.location && project.year && (
              <div className="h-6 w-px bg-neutral-200" />
            )}
            {project.year && (
              <div>
                <span className="text-neutral-400 block mb-1">Year</span>
                <span>{project.year}</span>
              </div>
            )}
            {project.category && (
              <>
                <div className="h-6 w-px bg-neutral-200" />
                <div>
                  <span className="text-neutral-400 block mb-1">Typology</span>
                  <span>{project.category}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* HERO MEDIA BANNER */}
      <section className="w-full">
        <div className="w-full h-[75vh] relative overflow-hidden bg-neutral-900">
          {project.video ? (
            <video
              src={project.video}
              poster={project.image}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </section>

      {/* EDITORIAL NARRATIVE & SCOPE */}
      <section className="px-6 py-20 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8B0035] font-medium mb-3">
              Design Philosophy
            </p>
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-neutral-900 leading-tight">
              About the project
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="font-light text-2xl md:text-4xl leading-snug text-neutral-800 tracking-tight">
              {project.description}
            </p>

            <p className="text-neutral-600 leading-relaxed mt-8 text-base md:text-lg font-light">
              {project.fullDescription ||
                "Every element was crafted as part of one cohesive spatial language, seamlessly connecting internal rooms with external light and natural vistas."}
            </p>

            {project.technologies && project.technologies.length > 0 && (
              <div className="mt-12 pt-8 border-t border-neutral-300">
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-4 font-medium">
                  Scope of Work
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((item) => (
                    <span
                      key={item}
                      className="px-5 py-2 border border-neutral-300 rounded-full text-xs uppercase tracking-[0.15em] text-neutral-700 bg-white/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION WITH SCROLL REVEAL */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="px-3 md:px-4 pb-20">
          <div className="mx-auto max-w-7xl mb-8 px-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8B0035] font-medium">
              Gallery
            </p>
            <h3 className="text-2xl md:text-3xl font-light uppercase text-neutral-900 mt-1">
              Visual Perspectives
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.gallery.map((imgSrc, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden bg-neutral-900"
              >
                <ScrollRevealImage
                  src={imgSrc}
                  alt={`${project.title} gallery view ${index + 1}`}
                  animated={true}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* BOTTOM CTA BANNER */}
      <section className="bg-[#8B0035] text-white py-24 px-6 md:px-12">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-2">Let's Collaborate</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-light uppercase tracking-tight">
              Start a project
            </h2>
          </div>

          <Link
            to="/contact-us"
            className="inline-block px-10 py-5 bg-white text-[#8B0035] text-xs font-semibold uppercase tracking-[0.25em] hover:bg-neutral-100 transition-colors duration-300"
          >
            Let's Talk →
          </Link>
        </div>
      </section>
    </article>
  );
}

export default ProjectDetail;