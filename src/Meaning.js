import Synonyms from "./Synonyms";
import "./Meaning.css";

function Meaning(props) {
  return (
    <div className="meaning">
      <div className=" grid">
        <div>
          <span className="number d-flex">{props.index + 1}</span>
        </div>
        <div className="pe-2">
          <p className="definition">{props.meaning.definition}</p>
          <p className="speech">{props.meaning.partOfSpeech}</p>
          <em className="example">{props.meaning.example}</em>
        </div>
      </div>
      <div className="synonyms">
        <Synonyms
          synonyms={props.meaning.synonyms}
          antonyms={props.meaning.antonyms}
        />
      </div>
      <hr />
    </div>
  );
}

export default Meaning;
