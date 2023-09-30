function Overview(props) {
  return (
    <div className="">
      <h2>{props.word}</h2>
      <em>{props.phonetic}</em>
    </div>
  );
}

export default Overview;
