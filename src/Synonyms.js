import { useState } from "react";
import Antonyms from "./Antonyms";
import "./Synonyms.css";
function Synonyms(props) {
  const [open, setOpen] = useState(false);
  function openSynonyms() {
    setOpen(true);
  }
  function closeSynonyms() {
    setOpen(false);
  }
  if (props.synonyms) {
    if (open) {
      return (
        <div>
          <em>synonyms:</em>

          <div className="d-flex synonyms-grid">
            {props.synonyms.map(function (synonym, index) {
              return (
                <span
                  className="col synonym"
                  key={index}
                  onClick={closeSynonyms}
                >
                  {synonym}
                </span>
              );
            })}
          </div>
          <Antonyms antonyms={props.antonyms} />
        </div>
      );
    } else {
      return (
        <i className="fa-solid fa-chevron-down" onClick={openSynonyms}></i>
      );
    }
  } else {
    return null;
  }
}

export default Synonyms;
