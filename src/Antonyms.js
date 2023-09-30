function Antonyms(props) {
  if (props.antonyms) {
    return (
      <div>
        <em>antonyms:</em>
        <div className="d-flex">
          {props.antonyms.map(function (antonym, index) {
            return (
              <span className="col" key={index}>
                {antonym}
              </span>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Antonyms;
