import { Link } from "react-router-dom";
import projects from "../../data/projects";
import Card from "../ui/Card";

function FeaturedWorks() {
  // Select first 7 showcased projects to match sequence (2 grid -> 3 full width -> 2 grid)
  const featuredProjects = projects.slice(0, 7);

  return (
    <section className="w-full bg-[#f5f2ec] py-20 md:py-28 px-3 md:px-4">
      {/* CENTERED HEADING */}
      <div className="mx-auto max-w-4xl text-center mb-16 md:mb-20">
        <p className="text-xs uppercase tracking-[0.3em] text-[#8B0035] font-medium mb-2">
          Portfolio
        </p>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight text-[#8B0035]">
          FEATURED WORKS
        </h2>
      </div>

      {/* DYNAMIC GRID LAYOUT */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
        {featuredProjects.map((project, index) => (
          <div
            key={project.id || project.slug || index}
            className={project.fullWidth ? "md:col-span-2" : ""}
          >
            <Card project={project} index={index + 2} />
          </div>
        ))}
      </div>

      {/* CENTERED PLUS (+) BUTTON LINKING TO /projects */}
      <div className="mt-16 md:mt-24 flex justify-center">
        <Link
          to="/projects"
          className="
            flex
            items-center
            justify-center
            w-16
            h-16
            md:w-20
            md:h-20
            rounded-full
            bg-[#8B0035]
            text-white
            text-2xl
            md:text-3xl
            shadow-2xl
            transition-all
            duration-500
            hover:bg-white
            hover:text-[#8B0035]
            hover:scale-110
            border
            border-[#8B0035]
          "
          aria-label="View All Projects"
        >
          +
        </Link>
      </div>
    </section>
  );
}

export default FeaturedWorks;