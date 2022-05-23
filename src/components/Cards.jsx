import React from "react";
import { Card } from "./index";
import "../App.css";

export const Cards = (props) => {
  return (
    <div className="containerCards">
      {props.projects?.map((project) => (
        <div key={project.page}>
          <Card
            name={project.name}
            img={project.img}
            page={project.page}
            github={project.github}
            description={project.description}
            text={props.description}
          />
        </div>
      ))}
    </div>
  );
};
