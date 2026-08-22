function ContactUs() {
  return (
    <div className="bg-[#760027] text-white">

      <section className="min-h-screen pt-40 pb-20">

        <div className="hid-container">

          <p className="text-small text-white/50 mb-8">
            Contact
          </p>

          <h1 className="font-display text-display">
            Let's
            <br />
            talk.
          </h1>

          <div className="grid lg:grid-cols-2 gap-20 mt-24">

            <div>

              <p className="text-small text-white/50 mb-5">
                General Enquiries
              </p>

              <a
                href="mailto:hello@hidstudio.com"
                className="text-2xl md:text-4xl font-display"
              >
                hello@hidstudio.com
              </a>

            </div>

            <div>

              <p className="text-small text-white/50 mb-5">
                Visit
              </p>

              <p className="text-lg leading-8 text-white/80">
                New Delhi, India
              </p>

            </div>

          </div>

          <div className="mt-24">

            <form className="max-w-3xl">

              <div className="grid md:grid-cols-2 gap-10">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-transparent border-b border-white/30 py-4 outline-none placeholder:text-white/50"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent border-b border-white/30 py-4 outline-none placeholder:text-white/50"
                />

              </div>

              <textarea
                rows="5"
                placeholder="Tell us about your project"
                className="w-full mt-12 bg-transparent border-b border-white/30 py-4 outline-none resize-none placeholder:text-white/50"
              />

              <button
                type="submit"
                className="hid-button bg-white text-[#760027] mt-10"
              >
                Send Enquiry
              </button>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ContactUs;