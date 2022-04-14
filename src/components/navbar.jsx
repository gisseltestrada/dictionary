import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export function Navbar() {
  return (
    <>
      <header className="navbar">
        <div className="nav-container">
          <p className="logo">Dictionary</p>
          <div className="link-containter">
            <nav>
              <ul>
                <li>
                  <Link to="/">Dictionary</Link>
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
