import "./section.css";
import Caroussel from "../Caroussel/Caroussel";
("../Caroussel/Caroussel");
const Section = (props) => {
  console.log("ICIIII", props);
  const data = [props];

  return (
    <>
      {data.map((element, index) => {
        return (
          <section key={index}>
            <h2>{element.data.category}</h2>
            <Caroussel images={element.data.images} />
          </section>
        );
      })}
    </>
  );
};

export default Section;
