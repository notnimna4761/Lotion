import React from "react";
import {
  useOutletContext,
  useParams,
  Link,
  useNavigate,
} from "react-router-dom";
function Preview() {
  const { id } = useParams();
  const [notesObjects, setNotes] = useOutletContext();

  const navigate = useNavigate();
  const note = notesObjects.find((note) => note.id === id);
  if (!note) {
    navigate(`/`, { replace: true });
  }
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formatDate = (when) => {
    const formatted = new Date(when).toLocaleString("en-US", options);
    if (formatted === "Invalid Date") {
      return "";
    }
    return formatted;
  };

  const onDeleteNote = (noteId) => {
    const answer = window.confirm("Are you sure?");
    if (answer) {
      setNotes(notesObjects.filter(({ id }) => id !== noteId));
    }
  };

  return (
    <div id="mainbar">
      <div className="app-main">
        <div className="app-main-note-edit">
          <div id="mainbar-header">
            <h1 id="mainbar-title">
              {note.title && note.title.substr(0, 100)} {"..."}
            </h1>
            <div id="mainbar-buttons">
              <Link key={note.id} to={"/Edit/" + note.id} id="edit-link">
                <button id="save_button">Edit</button>
              </Link>
              <Link>
                <button
                  id="delete_button"
                  onClick={(e) => onDeleteNote(note.id)}
                >
                  delete
                </button>
              </Link>
            </div>
          </div>
          <div id="mainbar-edit">
            <div id="date">{formatDate(note.userDate)}</div>

            <div
              id="mainbar-content"
              dangerouslySetInnerHTML={{ __html: note.body }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
