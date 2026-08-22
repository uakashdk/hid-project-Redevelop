import services from "../../data/servicesData";
import ServiceCard from "./ServiceCard";

const ServicesGrid = () => {
  return (
    <section className="w-full bg-[#f5f2ec] px-3 pb-3 md:px-4 md:pb-4">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={service.fullWidth ? "md:col-span-2" : ""}
          >
            <ServiceCard
              service={service}
              index={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;