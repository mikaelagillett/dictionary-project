import Meaning from "./Meaning";

function Adjective(props) {
  return props.data.meanings.map(function (meaning, index) {
    if (meaning.partOfSpeech.includes("adjective")) {
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

export default Adjective;
