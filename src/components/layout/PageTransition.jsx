import { useEffect } from "react";
import { animatePageIn } from "../../animations/pageAnimations";

const PageTransition = ({ children }) => {
  useEffect(() => {
    animatePageIn();
  }, []);

  return <>{children}</>;
};

export default PageTransition;