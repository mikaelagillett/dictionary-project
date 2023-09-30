import Meaning from "./Meaning";

function Verb(props) {
  return props.data.meanings.map(function (meaning, index) {
    if (meaning.partOfSpeech.includes("verb")) {
      return (
        <div key={index}>
          <Meaning meaning={props.meaning} />
        </div>
      );
    } else {
      return "this word is not a verb";
    }
  });
}

export default Verb;
