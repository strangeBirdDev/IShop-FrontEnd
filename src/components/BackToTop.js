import React from "react";
import { useEffect, useState } from "react";
import "./all.css";

const BackToTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  });

  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backToTop && (
        <button className="topbtn" onClick={top}>
          Top
        </button>
      )}
    </div>
  );
};

export default BackToTop;
