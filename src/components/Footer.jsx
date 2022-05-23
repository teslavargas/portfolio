import React from "react";
import "../App.css";

export const Footer = () => {
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
      </ul>
    </div>
  );
};
