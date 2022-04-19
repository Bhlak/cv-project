import React from "react";
import "./App.css";
import General from "./components/general";
import Education from "./components/educational";
import Practical from "./components/practical";

function App() {
  return (
    <React.Fragment>
      <h1>CV PROJECT</h1>
      <General />
      <Education />
      <Practical />
    </React.Fragment>
  );
}

export default App;
