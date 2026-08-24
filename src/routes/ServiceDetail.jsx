import { Link, useParams } from "react-router-dom";
import services from "../data/servicesData";

const ServiceDetail = () => {
  const { slug } = useParams();

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <main className="page-content flex min-h-screen items-center justify-center bg-white px-6">

        <div className="text-center">

          <h1 className="text-5xl font-medium text-[#8B0035]">
            Service Not Found
          </h1>

          <Link
            to="/services"
            className="mt-8 inline-block border border-[#8B0035] px-6 py-3 text-sm uppercase tracking-wider text-[#8B0035]"
          >
            Back to Services
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="page-content bg-white">

      {/* Hero Image */}
      <section className="relative h-[70vh] min-h-[500px]">

        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 z-10 flex items-end px-6 pb-16 md:px-10 md:pb-20 lg:px-16">

          <h1 className="max-w-5xl text-5xl font-medium uppercase leading-none text-white md:text-7xl lg:text-8xl">
            {service.title}
          </h1>

        </div>

      </section>

      {/* Description */}
      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-16">

        <div className="mx-auto max-w-4xl">

          <p className="text-xl leading-relaxed text-neutral-700 md:text-3xl">
            {service.description}
          </p>

          <Link
            to="/contact"
            className="
              mt-10
              inline-flex
              bg-[#8B0035]
              px-8
              py-4
              text-xs
              uppercase
              tracking-[0.2em]
              text-white
            "
          >
            Start a Project
          </Link>

        </div>

      </section>

    </main>
  );
};

export default ServiceDetail;