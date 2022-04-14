import React from "react";
import "./info-boxes.css";

export function InfoBoxes(props) {
  const renderDefinitions = props.meaning.definitions.map(
    (defObject, index) => {
      return (
        <li key={index}>
          <p>
            Definition {index + 1}: {defObject.definition}
          </p>
          <p>Example: {defObject.example || "No example provided."}</p>
        </li>
      );
    }
  );

  return (
    <div className="main-container">
      <div className="box">
        <p className="searched-word">{props.searchWord}</p>
        <p>Part of speech: {props.partOfSpeech}</p>
        <hr />
        <ul>{renderDefinitions}</ul>
      </div>
    </div>
  );
}
