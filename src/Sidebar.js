function Sidebar() {
  return (
        <div className="app-sidebar">

            <div className="app-sidebar-header">
                <h2>Notes</h2>
                <button>Add</button>
            </div>

            <div className="app-sidebar-notes">
                <div className="app-sidebar-note">
                    <div className="sidebar-note-title">
                        <strong>TITLE </strong>
                        <button>Delete</button>
                    </div>
                    
                    <p>Some text</p>
                    <small className="note-meta">Last modified [date]</small>
                </div>

                
            </div>



        </div>
  )
}

export default Sidebar;