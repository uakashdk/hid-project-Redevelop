import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

const RouteAnimation = () => {
  const location = useLocation();

  useEffect(() => {
    const page = document.querySelector(".page-content");

    if (!page) return;

    gsap.fromTo(
      page,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, [location.pathname]);

  
  return null;
};

export default RouteAnimation;