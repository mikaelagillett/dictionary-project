import Meaning from "./Meaning";

function Results(props) {
  if (props.wordData.ready) {
    return (
      <div>
        <h2>{props.wordData.data.word}</h2>
        <em>{props.wordData.data.phonetic}</em>
        {props.wordData.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              {" "}
              <Meaning meaning={meaning} />{" "}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Results;
