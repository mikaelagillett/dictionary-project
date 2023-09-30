import "./App.css";
import logo from "./logo.png";

import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} alt="dictionarylogo" />
        </header>
        <Dictionary />
        <footer className="position-fixed bottom-0 end-0 footer">
          coded by mikaela gillett
          <br />
          <a href="https://github.com/mikaelagillett/dictionary-project">
            open-source coded
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
