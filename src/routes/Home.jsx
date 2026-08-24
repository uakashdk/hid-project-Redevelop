import HeroVideo from "../components/sections/HeroVideo";
import BrandStory from "../components/sections/BrandStory";
import ServicesGrid from "../components/sections/ServicesGrid";
import FeaturedWorks from "../components/sections/FeaturedWorks";
import LatestInsight from "../components/sections/LatestInsight";

function Home() {
  return (
    <>
      <HeroVideo />

      <BrandStory />

      <ServicesGrid />

      <FeaturedWorks />

      <LatestInsight />

      <section className="bg-[#760027] text-white py-32">
        <div className="hid-container text-center">

          <p className="text-small mb-6 text-white/60">
            Begin your journey
          </p>

          <h2 className="font-display text-6xl md:text-8xl">
            Let's create
            <br />
            something remarkable.
          </h2>

          <a
            href="/contact-us"
            className="hid-button bg-white text-[#760027] mt-10"
          >
            Let's Talk
          </a>

        </div>
      </section>
    </>
  );
}

export default Home;