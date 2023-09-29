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
      </div>
    </div>
  );
}

export default App;
