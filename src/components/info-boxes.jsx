import React from "react";
import "./info-boxes.css";

export function InfoBoxes(props) {
  const renderDefinitions = props.meaning.definitions.map(
    (defObject, index) => {
      return (
        <>
          <li key={index}>
            <p>
              Definition {index + 1}: {defObject.definition}
            </p>
            <p>Example: {defObject.example || "No example provided."}</p>
          </li>
          <hr />
        </>
      );
    }
  );

  const renderAntonyms = props.meaning.antonyms.map((antonymString, index) => {
    return (
      <>
        <li key={index}>
          <p>
            Antonym {index + 1}: {antonymString};
          </p>
        </li>
        <hr />
      </>
    );
  });

  const renderSynonyms = props.meaning.synonyms.map((synonymString, index) => {
    return (
      <>
        <li key={index}>
          <p>
            Synonym {index + 1}: {synonymString};
          </p>
        </li>
        <hr />
      </>
    );
  });

  return (
    <div className="main-main">
      <div className="main-container">
        <div className="box">
          <p className="searched-word">{props.searchWord}</p>
          <p className="partOfSpeech">Part of speech: {props.partOfSpeech}</p>
          <ul className="definitions">
            {props.type === "dictionary" && renderDefinitions}
            {props.type === "thesaurus" && renderAntonyms}
            {props.type === "thesaurus" && renderSynonyms}
            {props.type === "thesaurus" &&
              renderSynonyms.length === 0 &&
              renderAntonyms.length === 0 && <li>n/a</li>}
          </ul>
        </div>
      </div>
    </div>
  );
  /*
return (
  <div className="main-main">
    <div className="main-container">
      <div className="box">
        <p className="searched-word">{props.searchWord}</p>
        <p className="Synonyms">Antonyms:</p>
          <ul className="definitions">{renderDefinitions}</ul>
      </div>
    </div>
   </div>
); */
}
