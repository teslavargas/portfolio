import React from "react";
import "../App.css";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer">
      <ul>
        <li>
          <a href="mailto:teslavargas18@gmail.com?Subject=Asunto">
            <box-icon type="logo" color="white" name="gmail"></box-icon>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/joel-vargas-dev">
            <box-icon
              name="linkedin-square"
              color="white"
              type="logo"
            ></box-icon>
          </a>
        </li>
        <li>
          <a href="https://github.com/teslavargas">
            <box-icon name="github" color="white" type="logo"></box-icon>
          </a>
        </li>
        <li
          style={{
            cursor: "pointer",
          }}
          onClick={() => scrollToTop()}
        >
          <box-icon type="solid" name="up-arrow" color="white"></box-icon>
        </li>
      </ul>
    </div>
  );
};
