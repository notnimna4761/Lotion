function Mainbar({notes,onDeleteNote}) {
    return (
        <div id ="mainbar">
            <div id = "mainbar-header">
                <h1 id = "mainbar-title"> Note 1 </h1>
                <div id = "mainbar-buttons">
                    <button id = "save_button" >save</button>
                    {/* i changed this to notes instead of note  */}
                    <button onClick= {() => onDeleteNote(notes.id)} id = "delete_button">delete</button>
                </div>
            </div>
            <div id = "mainbar-content">
                <textarea id = "mainbar-textarea" placeholder = "Enter your note here..."></textarea>
            </div>

        </div>
    );
}
export default Mainbar;