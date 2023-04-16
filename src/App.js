import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false;
  };
  const [dark, setMode] = useState(getMode);
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark));
  }, [dark]);

  return (
    <div className={dark ? "App dark-mode" : "App"}>
      <div className="nav">
        <label className="switch">
          <input
            type="checkbox"
            checked={dark}
            onChange={() => setMode(!dark)}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="content">
        <h1>{dark ? "Dark mode is on" : "light mode is on"}</h1>
        <p>Want to see some magic ?? press toggle button </p>
      </div>
    </div>
  );
}
