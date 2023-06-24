import "./caroussel.css";

const Caroussel = (props) => {
  console.log(props);
  return (
    <div className="caroussel">
      {props.images.map((image, index) => {
        return (
          <div key={index}>
            <a href="#">
              <img src={image} alt="image" />
            </a>
          </div>
        );
      })}{" "}
    </div>
  );
};

export default Caroussel;
