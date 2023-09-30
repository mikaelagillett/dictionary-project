function Meaning(props) {
  return (
    <div>
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>{props.meaning.definition}</p>
      <em>{props.meaning.example}</em>
    </div>
  );
}

export default Meaning;
