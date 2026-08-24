import ServicesHero from "../components/services/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid";
import ServicesCTA from "../components/services/ServicesCTA";

const Services = () => {
  return (
    <main className="page-content min-h-screen">
      <ServicesHero />

      <ServicesGrid />

      <ServicesCTA />
    </main>
  );
};

export default Services;