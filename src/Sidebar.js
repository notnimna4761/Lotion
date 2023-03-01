function Sidebar({notes, onAddNote,onDeleteNote, activeNote, setActiveNote}) {
  return (
        <div id ="sidebar">

          <div id = "sidebar-header">
            <h1 id = "sidebar-heading" > Notes</h1>
            <button onClick={onAddNote} id="add_new_button">+ </button>

          </div>



          <div id = "sidebar-content">

            {notes.map((note) => (
              <div className = {`sidebar-note ${note.id === activeNote && "active"}`}
              onClick ={() => setActiveNote(note.id)}  >
              
                <div id = "sidebar-note-title">
                  <h2> {note.title} </h2>
                  <button onClick= {() => onDeleteNote(note.id)} id = "delete_button">delete</button>
                </div>  
                <div id = "sidebar-note-body">
                  <p> {note.body && note.body.substr(0, 100) + "..." } </p>
{/* 
                  {new date (note.lastModified).toLocaleDateString('en-CA', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })} */}

                </div>
              </div>
            ))}


          </div>


        </div>
  )
}

export default Sidebar;