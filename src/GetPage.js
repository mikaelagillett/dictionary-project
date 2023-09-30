import Overview from "./Overview";
import Noun from "./Noun";
import Verb from "./Verb";
import Adjective from "./Adjective";

import "./GetPage.css";

function GetPage(props) {
  if (props.response.ready) {
    if (props.page === "Overview") {
      return (
        <Overview
          word={props.response.data.word}
          phonetic={props.response.data.phonetic}
        />
      );
    } else if (props.page === "Noun") {
      return <Noun data={props.response.data} />;
    } else if (props.page === "Verb") {
      return <Verb data={props.response.data} />;
    } else if (props.page === "Adjective") {
      return <Adjective data={props.response.data} />;
    } else if (props.page === "Photos") {
      return "display photos";
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export default GetPage;
