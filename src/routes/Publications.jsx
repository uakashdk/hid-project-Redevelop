import { publications } from "../data/publications";

function Publications() {
  return (
    <div className="bg-[#f4f0e8]">

      <section className="min-h-[70vh] flex items-end pb-20">

        <div className="hid-container">

          <p className="text-small text-[#760027] mb-6">
            In The Press
          </p>

          <h1 className="text-display">
            Publications
          </h1>

        </div>

      </section>

      <section className="pb-32">

        <div className="hid-container">

          {publications.map((item, index) => (
            <article
              key={item.title}
              className="grid md:grid-cols-[120px_1fr_1fr] gap-8 py-12 border-t border-black/20"
            >

              <span className="text-small text-gray-400">
                0{index + 1}
              </span>

              <div>
                <p className="text-small text-[#760027]">
                  {item.publication}
                </p>

                <h2 className="font-display text-4xl md:text-6xl mt-3">
                  {item.title}
                </h2>
              </div>

              <div className="flex md:justify-end">
                <span className="text-small text-gray-400">
                  {item.year}
                </span>
              </div>

            </article>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Publications;