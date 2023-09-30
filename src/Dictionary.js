import "./Dictionary.css";
import { useState } from "react";
import axios from "axios";
import Results from "./Results";

function Dictionary() {
  const [search, setSearch] = useState("");
  const [wordData, setWordData] = useState({});
  function searching(response) {
    setSearch(response.target.value);
  }
  function submitSearch(event) {
    event.preventDefault();
    let apiKey = "5332bf2a40c7e9tc684f12abo0f0ab54";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${search}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    setWordData(response.data);
  }

  return (
    <div className="dictionary">
      <form onSubmit={submitSearch}>
        <input
          className="searchBar"
          type="search"
          placeholder="Search"
          onChange={searching}
        />
        <button className="submitButton" type="submit">
          {" "}
          <i className="fa-solid fa-magnifying-glass search-icon"></i>{" "}
        </button>
      </form>
      <Results wordData={wordData} />
    </div>
  );
}

export default Dictionary;
