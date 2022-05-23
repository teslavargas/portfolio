import React from "react";
import "../App.css";
import { Cards } from "../components";
import projectsData from '../data/projects.json'

export const Projects = () => {
  return (
    <div className="animate__animated animate__backInRight">
        <Cards projects={projectsData} />
    </div>
  );
};
