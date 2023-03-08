import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.js";
import Preview from "./Preview.js";
import Edit from "./Edit.js";
import NoNote from "./NoNote.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} exact>
          <Route path="/" element={<NoNote />} exact />
          <Route path="/Preview/:id" element={<Preview />} />
          <Route path="/Edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
