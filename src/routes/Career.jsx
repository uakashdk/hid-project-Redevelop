function Career() {
  return (
    <div className="bg-[#f4f0e8]">

      <section className="min-h-[75vh] flex items-end pb-20">

        <div className="hid-container">

          <p className="text-small text-[#760027] mb-6">
            Join The Studio
          </p>

          <h1 className="text-display">
            Build
            <br />
            with us.
          </h1>

        </div>

      </section>

      <section className="hid-section bg-white">

        <div className="hid-container grid lg:grid-cols-2 gap-20">

          <h2 className="text-editorial">
            We are always
            <br />
            looking for
            <br />
            <i>curious minds.</i>
          </h2>

          <div>

            <p className="text-gray-500 leading-8">
              We believe great work comes from people who are curious,
              thoughtful and passionate about design. If you share that
              mindset, we'd love to hear from you.
            </p>

            <a
              href="mailto:hello@hidstudio.com"
              className="hid-button mt-10"
            >
              Send Your Portfolio
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Career;