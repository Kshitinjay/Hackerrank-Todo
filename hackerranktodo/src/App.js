import React, { useState } from "react";
import "./App.css";
// import "h8k-components";
import NotesApp from "./components/notes-app/index.js";

const title = "Notes App";

function App() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState("");
  const [item, setItem] = useState("");

  const handleItem = (event) => {
    setItem(event.target.value);
  };

  const handleFlag = (event) => {
    setFlag(event.target.value);
  };

  const addItem = () => {
    if (item.length > 0 && flag.length > 0) {
      const dt = {
        item: item,
        flag: flag,
      };
      setData([...data, dt]);
    }
  };
  return (
    <div>
      {/* <h8k-navbar header={title} /> */}
      <NotesApp handleItem={handleItem} handleFlag={handleFlag} addItem={addItem} data={data}/>
    </div>
  );
}

export default App;
