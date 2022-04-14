import React from "react";
import "./thesaurus.css";

export function ThesaurusComponent(props) {
  return (
    <div className="parent-container">
      <div className="child-container">
        <p className="title">Thesaurus</p>
        <div className="search-container">
          <div className="search-label">Search a word</div>
          <div className="form-container">
            <form>
              <input type="text" className="input-box" />
            </form>
            <button className="button">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}