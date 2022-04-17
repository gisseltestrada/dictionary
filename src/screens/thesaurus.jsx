import React from "react";
import axios from "axios";
import "./thesaurus.css";
import { useState } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer"
import { InfoBoxes } from "../components/info-boxes";

export function ThesaurusComponent(props) {
  const [userInput, setUserInput] = useState("");
  const [word, setWord] = useState("");
  const [toggleCards, setToggleCards] = useState(false);
  const [meanings, setMeanings] = useState([]);
  //const [outputData, setOutputData] = useState(null);
  const apiURL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let url = apiURL + userInput;
    const response = await axios.get(url);

    if (response.status === 200) {
      setWord(userInput);
      setToggleCards(true);
      let tempArray = [];
      response.data.forEach((dictionaryObject) => {
        dictionaryObject.meanings.forEach((meaning) => {
          tempArray.push(meaning);
        });
      });
      setMeanings(tempArray);
    } 
  };
;

  const renderInfoBoxes =  meanings.map((meaning) => {
    return (
      <>
        <InfoBoxes
          searchWord={word}
          meaning={meaning}
          type="thesaurus"
          partOfSpeech={meaning.partOfSpeech}
        />
       
      </>
    );
  });

  return (
    <>
      <Navbar />
      <div className="parent-container">
        <div className="child-container">
          <p className="title">Thesaurus</p>
          <div className="search-container">
            <div className="search-label">Search a word</div>
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="input-box"
                  onChange={handleUserInput}
                  value={userInput}
                />
                <button type="submit" className="button">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="infobox-container">
        {toggleCards && renderInfoBoxes}
      </div>
      <Footer />
    </>
  );
}

