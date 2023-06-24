import { useState } from "react";
import "./App.css";
import Sections from "./components/Sections/Sections";
import Header from "./components/Header/Header";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <Header />
      <Sections />
    </div>
  );
}

export default App;
