import { HashRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";

import "../App.css";
import { Home, Projects, Contact, About } from "../screens";

export const Navigation = () => {
  return (
    <HashRouter>
      <div>
        <div className="main-layout">
          <div className="header">
            <ul>
              <li>
                <NavLink
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                  }}
                  className={({ isActive }) =>
                    isActive ? "nav-active" : "nav-inactive"
                  }
                  to="/home"
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                  }}
                  className={({ isActive }) =>
                    isActive ? "nav-active" : "nav-inactive"
                  }
                  to="/about"
                >
                  Sobre mí
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                  }}
                  className={({ isActive }) =>
                    isActive ? "nav-active" : "nav-inactive"
                  }
                  to="/projects"
                >
                  Proyectos
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                  }}
                  className={({ isActive }) =>
                    isActive ? "nav-active" : "nav-inactive"
                  }
                  to="/contact"
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/home" element={<Home />} />

        <Route path="/*" element={<Navigate to="/home" replace />} />
      </Routes>
    </HashRouter>
  );
};
