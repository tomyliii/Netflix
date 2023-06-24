import "./sections.css";
import data from "../../assets/movies.json";
import Section from "../Section/Section";
const Sections = () => {
  console.log(data);
  return (
    <main>
      {data.map((section, index) => {
        return <Section key={index} data={section} />;
      })}
    </main>
  );
};

export default Sections;
