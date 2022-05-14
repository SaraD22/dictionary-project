import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  // eslint-disable-next-line
  let [keyword, setKeyword] = useState("");
  // eslint-disable-next-line
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev/
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiURL);
    axios.get(apiURL).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
