import "./Overview.css";

function Overview(props) {
  return (
    <div className="overview">
      <h2>{props.word}</h2>
      <em>{props.phonetic}</em>
    </div>
  );
}

export default Overview;
