import React, { useEffect, useState } from "react";
import "./index.css";

function NotesApp({ handleItem, handleFlag, addItem, data }) {
  const [switchTab, setSwitchTab] = useState("");
  const [val, setVal] = useState("All");

  const handleSwitchTab = (event) => {
    setSwitchTab(event.target.innerText);
  };

  useEffect(() => {
    setVal(switchTab);
  }, [switchTab]);

  console.log(val);
  return (
    <div className="layout-column align-items-center justify-content-start">
      <section className="layout-row align-items-center justify-content-center mt-30">
        <input
          data-testid="input-note-name"
          type="text"
          className="large mx-8"
          placeholder="Note Title"
          onChange={handleItem}
        />
        <input
          data-testid="input-note-status"
          type="text"
          className="large mx-8"
          placeholder="Note Status"
          onChange={handleFlag}
        />
        <button className="" data-testid="submit-button" onClick={addItem}>
          Add Note
        </button>
      </section>

      <div className="mt-50">
        <ul className="tabs">
          <li
            className="tab-item slide-up-fade-in"
            data-testid="allButton"
            onClick={handleSwitchTab}
          >
            All
          </li>
          <li
            className="tab-item slide-up-fade-in"
            data-testid="activeButton"
            onClick={handleSwitchTab}
          >
            Active
          </li>
          <li
            className="tab-item slide-up-fade-in"
            data-testid="completedButton"
            onClick={handleSwitchTab}
          >
            Completed
          </li>
        </ul>
      </div>
      <div className="card w-40 pt-30 pb-8">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody data-testid="noteList">
            {val === "All" ? (
              <>
                {data.map((element, id) => (
                  <tr key={id}>
                    <td>{element.item}</td>
                    <td>{element.flag}</td>
                  </tr>
                ))}
              </>
            ) : (
              <>
                {data
                  .filter((e) => e.flag == val)
                  .map((element, id) => (
                    <tr key={id}>
                      <td>{element.item}</td>
                      <td>{element.flag}</td>
                    </tr>
                  ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NotesApp;
