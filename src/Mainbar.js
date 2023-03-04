import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Mainbar({ formatDate, onDeleteNote, activeNote, onUpdateNote }) {
  console.log(activeNote.id);
  console.log("ahahahha kill me pls");
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };
  if (!activeNote) {
    return (
      <div id="mainbar-no-active-note">Select a note or create a new one</div>
    );
  }

  return (
    <div id="mainbar">
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
          <button id="save_button">save</button>
          <button
            onClick={() => onDeleteNote(activeNote.id)}
            id="delete_button"
          >
            delete
          </button>
        </div>
      </div>
      <div id="date">
        <input
          defaultValue={formatDate(new Date().toDateString())}
          id="date"
          type="datetime-local"
        />
      </div>
      <div id="mainbar-content">
        <ReactQuill
          theme="snow"
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
    </div>
  );
}
export default Mainbar;
