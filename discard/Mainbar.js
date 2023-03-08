import { useRef, useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Main = ({ activeNote, onUpdateNote, onDeleteNote, formatDate }) => {
  const quill = useRef();
  // const navigate = useNavigate();

  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [when, setWhen] = useState("");

  // useEffect(() => {
  //   if (activeNote) {
  //     setBody(activeNote.body);
  //     console.log(activeNote.body);
  //   }
  // }, []);

  const onSaveNote = (title, body, when) => {
    console.log(title);
    // when the time

    onUpdateNote({
      ...activeNote,
      title: title,
      body: body,
      lastModified: Date.now(),
      userDate: when,
    });
  };

  if (!activeNote)
    return (
      <div className="no-active-note">Select a note or create a new one </div>
    );

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <div id="mainbar-header">
          <h1 id="mainbar-title">
            <input
              type="text"
              id="mainbar-title-input"
              value={activeNote.title}
              onChange={setTitle}
              autoFocus
            />
          </h1>
          <div id="mainbar-buttons">
            <button
              id="save_button"
              onClick={() => onSaveNote(title, body, when)}
            >
              save
            </button>
            <button
              id="delete_button"
              onClick={(e) => onDeleteNote(activeNote.id)}
            >
              delete
            </button>
          </div>
        </div>
        <div id="mainbar-edit">
          <div id="date">
            <input
              type="datetime-local"
              id="date"
              value={activeNote.userDate}
              onChange={(e) => {
                setWhen(e.target.value);
              }}
            />
          </div>

          <div id="mainbar-content">
            <ReactQuill
              ref={quill}
              theme="snow"
              value={body}
              onChange={setBody}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
