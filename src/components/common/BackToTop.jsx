import React, { useState, useEffect } from "react";
import { BackToTopIcon } from "./Icon";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to the top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          
          className="fixed bottom-5 right-5 bg-dark-orange text-white p-3 rounded-full shadow-lg hover:bg-fed-orange duration-700 focus:outline-none focus:ring focus:ring-dark-orange"
          
        >
          <BackToTopIcon/>
        </button>
      )}
    </>
  );
};

export default BackToTop;
