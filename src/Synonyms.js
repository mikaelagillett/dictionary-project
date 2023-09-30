function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="d-flex">
        {props.synonyms.map(function (synonym, index) {
          return (
            <span className="col" key={index}>
              {synonym}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Synonyms;
