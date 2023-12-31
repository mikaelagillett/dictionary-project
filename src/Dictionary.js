import "./Dictionary.css";
import { useState } from "react";
import axios from "axios";
import GetPage from "./GetPage";

function Dictionary() {
  const [search, setSearch] = useState("");
  const [wordData, setWordData] = useState({ ready: false });
  const [imageData, setImageData] = useState();
  const [page, setPage] = useState("Overview");
  function searching(response) {
    setSearch(response.target.value);
  }
  function submitSearch(event) {
    event.preventDefault();
    let dictionaryApiKey = "5332bf2a40c7e9tc684f12abo0f0ab54";
    let dictionaryApiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${search}&key=${dictionaryApiKey}`;
    axios.get(dictionaryApiUrl).then(handleResponse);
    let imagesApiKey = "5332bf2a40c7e9tc684f12abo0f0ab54";
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${search}&key=${imagesApiKey}`;
    axios.get(imagesApiUrl).then(getImages);
    setPage("Overview");
  }
  function handleResponse(response) {
    setWordData({ ready: true, data: response.data });
  }
  function getImages(response) {
    setImageData(response.data.photos);
  }
  function changePage(event) {
    event.preventDefault();
    setPage(event.target.ariaLabel);
  }

  return (
    <div className="dictionary">
      <form className="d-flex justify-content-between" onSubmit={submitSearch}>
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
      <div className="d-flex mt-3 ">
        <nav className="navbar pt-3 pb-3">
          <div className="container-fluid p-0 ">
            <div id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={changePage}
                    aria-label="Overview"
                    href="/"
                  >
                    OVERVIEW
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={changePage}
                    aria-label="Noun"
                    href="/"
                  >
                    NOUN
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={changePage}
                    aria-label="Verb"
                    href="/"
                  >
                    VERB
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={changePage}
                    aria-label="Adjective"
                    href="/"
                  >
                    ADJECTIVE
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link pt-1"
                    onClick={changePage}
                    aria-label="Photos"
                    href="/"
                  >
                    PHOTOS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className=" box ms-4">
          <GetPage page={page} response={wordData} photos={imageData} />
        </div>
      </div>
    </div>
  );
}

export default Dictionary;
