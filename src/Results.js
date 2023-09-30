import Meaning from "./Meaning";

function Results(props) {
  return (
    <div>
      <h2>{props.wordData.word}</h2>
      <em>{props.wordData.phonetic}</em>
      {props.wordData.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            {" "}
            <Meaning meaning={meaning} />{" "}
          </div>
        );
      })}
    </div>
  );
}

export default Results;
