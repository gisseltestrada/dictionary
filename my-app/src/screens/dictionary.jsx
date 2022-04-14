import React from "react";
import "./dictionary.css";
import { useState, useEffect } from "react";

export function DictionaryComponent(props) {

  const [userInput, setUserInput] = useState(null);
  const [outputData, setOutputData] = useState(null);

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  }

  const handleSubmit = () => {
    get(url).then((response) => {
      if (response.ok) {
        setOutputData(response.json())
      }
      throw new Error('Request failed!');
    }, networkError => {
      console.log(networkError.message)
    })

  }

  const apiURL = "https://api.dictionaryapi.dev/api/v2/entries/en/"
  let url = apiURL + userInput;

  useEffect(() => {
  }

  return (
    <div className="parent-container">
      <div className="child-container">
        <p className="title">Dictionary</p>
        <div className="search-container">
          <div className="search-label">Search a word</div>
          <div className="form-container">
            <form>
              <input type="text" className="input-box" onChange={handleUserInput} value={userInput}/>
            </form>
            <button type="submit" className="button" onSubmit={handleSubmit}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
