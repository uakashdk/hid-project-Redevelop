import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-white">

      <div className="hid-container py-24 md:py-32">

        <div className="grid lg:grid-cols-2 gap-20">

          <div>
            <p className="text-small text-white/50 mb-8">
              Let's create something timeless
            </p>

            <h2 className="font-display text-[clamp(4rem,9vw,9rem)] leading-[0.8]">
              Let's
              <br />
              talk.
            </h2>

            <Link
              to="/contact-us"
              className="hid-button mt-12 inline-flex"
            >
              Start a Conversation
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-12">

            <div>
              <p className="text-small text-white/40 mb-6">
                Explore
              </p>

              <div className="flex flex-col gap-4">
                <Link to="/about-us">About Us</Link>
                <Link to="/services">Services</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/publications">Publications</Link>
              </div>
            </div>

            <div>
              <p className="text-small text-white/40 mb-6">
                Company
              </p>

              <div className="flex flex-col gap-4">
                <Link to="/career">Career</Link>
                <Link to="/contact-us">Contact Us</Link>
              </div>
            </div>

          </div>

        </div>

        <div className="border-t border-white/20 mt-24 pt-8 flex flex-col md:flex-row justify-between gap-5 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} HID Studio. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" target="_blank" rel="noreferrer">
              Instagram
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              Privacy Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;