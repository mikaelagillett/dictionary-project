import Meaning from "./Meaning";

function Verb(props) {
  return props.data.meanings.map(function (meaning, index) {
    if (meaning.partOfSpeech.includes("verb")) {
      return (
        <div key={index}>
          <Meaning meaning={meaning} index={index} />
        </div>
      );
    } else {
      return null;
    }
  });
}

export default Verb;
