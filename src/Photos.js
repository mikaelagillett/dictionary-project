import "./Photos.css";

function Photos(props) {
  if (props.data) {
    return (
      <div className="d-flex photo-wrap">
        <div className="photo-grid">
          {props.data.map(function (image, index) {
            if (index < 6) {
              console.log(image.src.portrait);
              return (
                <div key={index}>
                  <img
                    className="img-fluid"
                    src={image.src.portrait}
                    alt={image.alt}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return <p>loading</p>;
  }
}
export default Photos;
