import uuid from "react-uuid";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Layout() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);
  const navigate = useNavigate();
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const date = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode);
    const root = document.documentElement;
    root.classList.toggle("dark-mode");
  };

  const hideSideBar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hide");
  };

  const formatDate = (when) => {
    const formatted = new Date(when).toLocaleString("en-CA", date);
    if (formatted === "Invalid Date") {
      return "";
    }
    return formatted;
  };

  var onAddNote = () => {
    var newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      bodyPreview: "",
      lastModified: Date.now(),
      userDate: "",
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
    navigate(`/Edit/${newNote.id}`, { replace: true }); // <--- this is the line that does the magic
  };

  return (
    <>
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
      <div id="container">
        <div id="sidebar">
          <div className="app-sidebar-header">
            <h1>Notes</h1>
            <button onClick={onAddNote}>+</button>
          </div>
          <div className="app-sidebar-notes">
            {sortedNotes.map(({ id, title, body, lastModified }, i) => (
              <div
                className={`app-sidebar-note ${id === activeNote && "active"}`}
                onClick={() =>
                  setActiveNote(id) &&
                  navigate(`/Preview/${id}`, { replace: true }) &&
                  console.log("WHY WONT U WORK")
                }
              >
                <div className="sidebar-note-title">
                  <strong>{title && title.substr(0, 50)}</strong>
                </div>

                <p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: body && body.substr(0, 200) + "...",
                    }}
                  ></div>
                </p>
                <small className="note-meta">
                  Last Modified{" "}
                  {new Date(lastModified).toLocaleDateString("en-CA", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </small>
              </div>
            ))}
          </div>
        </div>
        <Outlet context={[sortedNotes, setNotes, activeNote, setActiveNote]} />
      </div>
    </>
  );
}
export default Layout;
