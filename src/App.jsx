import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import MobileMenu from "./components/layout/MobileMenu";

import Home from "./routes/Home";
import AboutUs from "./routes/AboutUs";
import Services from "./routes/Services";
import ServiceDetail from "./routes/ServiceDetail";
import Projects from "./routes/Projects";
import ProjectDetail from "./routes/ProjectDetail";
import Publications from "./routes/Publications";
import Career from "./routes/Career";
import ContactUs from "./routes/ContactUs";
import SmoothScroll from "./components/layout/SmoothScroll";
import RouteAnimation from "./components/layout/RouteAnimation";

function App() {
  return (
    <div className="site-wrapper">
      <SmoothScroll />
      <Navbar />
      <MobileMenu />
      <RouteAnimation />
      <main>  
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about-us" element={<AboutUs />} />

          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />

          <Route path="/publications" element={<Publications />} />

          <Route path="/career" element={<Career />} />

          <Route path="/contact-us" element={<ContactUs />} />

          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl">404 — Page Not Found</h1>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;