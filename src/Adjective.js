import Meaning from "./Meaning";

function Adjective(props) {
  return props.data.meanings.map(function (meaning, index) {
    if (meaning.partOfSpeech.includes("adjective")) {
      return (
        <div key={index}>
          <Meaning meaning={props.meaning} />
        </div>
      );
    } else {
      return "this word is not an adjective";
    }
  });
}

export default Adjective;
