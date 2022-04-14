import React from "react";
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
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#thesaurus">Thesaurus</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
