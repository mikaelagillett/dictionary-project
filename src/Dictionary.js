import "./Dictionary.css";
import { useState } from "react";

function Dictionary() {
  const [search, setSearch] = useState("");
  function searching(response) {
    setSearch(response.target.value);
  }
  function submitSearch(event) {
    event.preventDefault();
    alert(`${search}`);
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
    </div>
  );
}

export default Dictionary;
