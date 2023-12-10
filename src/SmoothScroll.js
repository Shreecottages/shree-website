import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes

const SmoothScroll = ({ children }) => {
  const location = useLocation();
  const navType = useNavigationType();
  useEffect(() => {
    if (navType !== "POP") {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [location]);
  // return <>{children}</>;
  return children; // Return children directly
};

SmoothScroll.propTypes = {
  children: PropTypes.node.isRequired, // Define prop types for children
};
export default SmoothScroll;
