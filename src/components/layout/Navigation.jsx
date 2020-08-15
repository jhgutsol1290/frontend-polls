import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="container mt-5 mb-4">
        <ul className="list-group list-group-flush">
          <Link to={"/"} className="nav-list-item">
            <li className="list-group-item navigation-aside">
              <i className="fas fa-user-friends"></i> Visualizar gráfica
            </li>
          </Link>
          <Link to={"/upload"} className="nav-list-item">
            <li className="list-group-item navigation-aside">
              <i className="fas fa-plus-circle"></i> Subir encuesta
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
