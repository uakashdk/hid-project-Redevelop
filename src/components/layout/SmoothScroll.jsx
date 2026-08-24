import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

const SmoothScroll = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;