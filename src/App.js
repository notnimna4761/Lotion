import { useState } from "react";
import uuid from "react-uuid";
import Sidebar from "./Sidebar.js";
import Mainbar from "./Mainbar.js";
import Headbar from "./Headbar.js";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(null);

  const date = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formatDate = (when) => {
    const formatted = new Date(when).toLocaleString("en-US", date);
    if (formatted === "Invalid Date") {
      return "";
    }
    return formatted;
  };

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "...",
      lastModified: Date.now().toLocaleString(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote.id) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArray);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className="App">
      <Headbar />
      <div id="container">
        <Sidebar
          notes={notes}
          onAddNote={onAddNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
          onDeleteNote={onDeleteNote}
        />
        <Mainbar
          formatDate={formatDate}
          onDeleteNote={onDeleteNote}
          activeNote={getActiveNote}
          onUpdateNote={onUpdateNote}
        />
      </div>
    </div>
  );
}

export default App;
