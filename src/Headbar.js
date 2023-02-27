import "./index.css";
function Headbar(){

    return (

    <div classname ="Headbar">
        <div id = "title_bar">
        <button id="hide_sidebar">&#9776; </button>

        <div id = "center_text"> 
            <h1> Lotion </h1>
            <p id = "subheading"> Notion's budget-friendly and slightly greasier cousin!  </p> 
        </div>

        <button id="dark_mode">&#9681; </button>
    </div>
  </div>
    );
}
export default Headbar;