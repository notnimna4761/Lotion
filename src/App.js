import { useState } from 'react';
import uuid from 'react-uuid';
import Sidebar from "./Sidebar.js";
import Mainbar from "./Mainbar.js";
import Headbar from "./Headbar.js";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "...",
      // lastModified: Date.now(),
    }

    setNotes([...notes, newNote]);
  }

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  }


  return (
    <div classname ="App">
          <Headbar />
          <div id = "container">
              <Sidebar 
              notes = {notes} 
              onAddNote = {onAddNote} 
              onDeleteNote = {onDeleteNote}
              activeNote = {activeNote}
              setactiveNote = {setActiveNote}
              />
              <Mainbar onDeleteNote = {onDeleteNote}/>
          </div>
    </div>

  ) ;
}

export default App;
