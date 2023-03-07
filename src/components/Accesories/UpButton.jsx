import React from "react";
import "../../css/Accesories/UpButton.css";
import upButtom from "../../svg/up.svg";
const UpButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <img
      src={upButtom}
      alt="upbutton"
      className="upbutton"
      onClick={handleScrollToTop}
    />
  );
};

export default UpButton;
