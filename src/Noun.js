import Meaning from "./Meaning";

function Noun(props) {
  return props.data.meanings.map(function (meaning, index) {
    if (meaning.partOfSpeech.includes("noun")) {
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

export default Noun;
