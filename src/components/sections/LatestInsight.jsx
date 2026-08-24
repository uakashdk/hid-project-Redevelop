import { Link } from "react-router-dom";

function LatestInsight() {
  return (
    <section className="hid-section bg-white">

      <div className="hid-container">

        <div className="flex justify-between items-end mb-16">

          <div>
            <p className="text-small text-[#760027] mb-4">
              Journal
            </p>

            <h2 className="text-editorial">
              Latest
              <br />
              Insight
            </h2>
          </div>

          <Link
            to="/publications"
            className="text-small border-b border-black pb-2"
          >
            View All
          </Link>

        </div>

        <Link
          to="/publications"
          className="grid lg:grid-cols-2 gap-12 group"
        >

          <div className="overflow-hidden">
            <img
              src="/Images/2.png"
              alt="Latest insight"
              className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-luxury"
            />
          </div>

          <div className="flex flex-col justify-end">

            <p className="text-small text-gray-400">
              Design Journal · 2026
            </p>

            <h3 className="font-display text-4xl md:text-6xl mt-5">
              The art of creating spaces that endure.
            </h3>

            <span className="text-small mt-8">
              Read Article →
            </span>

          </div>

        </Link>

      </div>

    </section>
  );
}

export default LatestInsight;