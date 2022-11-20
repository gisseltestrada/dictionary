import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export function Navbar(props) {
  return (
    <>
      <header className="navbar">
        <div className="nav-container">
          <p className="logo">{props.typeOf}</p>
          <div className="link-containter">
            <nav>
              <ul>
                <li>
                  <Link to="/" className="link-tag">Dictionary</Link>
                </li>
                <li>
                  <Link to="/thesaurus">Thesaurus</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
