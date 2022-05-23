import React from "react";
import "../App.css";
import pdf from "../data/CVJoelVargas.pdf";

export const Skills = () => {
  return (
    <div className="container bootstrap snippets bootdey animate__animated animate__backInUp">
      <section id="news" className="white-bg padding-top-bottom">
        <div className="container bootstrap snippets bootdey">
          <div className="timeline">
            <div className="date-title">
              <span>Skills</span>
            </div>
            <div className="row">
              <div className="col-sm-6 news-item">
                <div className="news-content">
                  <h2 className="news-title">
                    React (JavaScript y TypeScript)
                  </h2>
                  <div className="news-media"></div>
                  <p></p>
                </div>
              </div>

              <div className="col-sm-6 news-item right">
                <div className="news-content">
                  <h2 className="news-title">Redux, ExpressJS, Sequelize</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 news-item">
                <div className="news-content">
                  <h2 className="news-title">PostgreSQL, Firebase, MongoDB</h2>
                </div>
              </div>

              <div className="col-sm-6 news-item right">
                <div className="news-content">
                  <h2 className="news-title">Git, SCRUM</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 news-item">
                <div className="news-content">
                  <h2 className="news-title">HTML, CSS, Bootstrap</h2>
                </div>
              </div>

              <div className="col-sm-6 news-item right">
                <div className="news-content">
                  <h2 className="news-title">Sass, Less</h2>
                </div>
              </div>
            </div>
            <div className="date-title">
              <a
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                download="1-CV-Joel-Vargas.pdf"
              >
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
