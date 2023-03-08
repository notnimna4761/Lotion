import React, { useState } from "react";
import "./index.css";

function Headbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode);
    const root = document.documentElement;
    root.classList.toggle("dark-mode");
  };

  const hideSideBar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hide");
  };

  return (
    <div className="Headbar">
      <div id="title_bar">
        <button id="hide_sidebar" onClick={hideSideBar}>
          &#9776;{" "}
        </button>

        <div id="center_text">
          <h1> Lotion </h1>
          <p id="subheading">
            {" "}
            Notion's budget-friendly and slightly greasier cousin!{" "}
          </p>
        </div>

        <button id="dark_mode" onClick={handleDarkModeClick}>
          &#9681;
        </button>
      </div>
    </div>
  );
}

export default Headbar;
