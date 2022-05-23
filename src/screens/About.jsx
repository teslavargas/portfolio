import React from "react";
import { Skills, Footer } from "../components";
import "../App.css";
import male from "../svg/male.svg";


export const About = () => {
  return (
    <div>
      <div className="about">
        <div className="profession animate__animated animate__backInUp">
          <h1>Mi nombre es Joel Vargas.</h1>
          <h2>
            Soy <span>Frontend Developer</span> con conocimientos en{" "}
            <span>Backend</span>.
          </h2>
          <img src={male} />
        </div>
      </div>
      <div className="skills">
        <Skills />
      </div>
      <Footer />
    </div>
  );
};
