import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Main = ({ activeNote, onUpdateNote, onDeleteNote, formatDate }) => {
  const [isNoteModified, setIsNoteModified] = useState(false);

  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
    setIsNoteModified(true);
  };

  const onSaveNote = () => {
    if (isNoteModified) {
      onUpdateNote({
        ...activeNote,
        body: activeNote.body,
        lastModified: Date.now(),
      });
      setIsNoteModified(false);
    }
  };

  if (!activeNote)
    return (
      <div className="no-active-note">Select a note or create a new one</div>
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
              onChange={(e) => onEditField("title", e.target.value)}
              autoFocus
            />
          </h1>
          <div id="mainbar-buttons">
            <button id="save_button" onClick={onSaveNote}>
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

        <div id="date">
          <input
            value={activeNote.lastModified}
            id="date"
            type="datetime-local"
            onChange={(e) => onEditField("lastModified", e.target.value)}
          />
        </div>

        <div id="mainbar-content">
          <ReactQuill
            theme="snow"
            value={activeNote.body}
            onChange={(value) => onEditField("body", value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
