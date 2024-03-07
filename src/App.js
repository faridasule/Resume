import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./Component/About";
import Works from "./Component/Works";

import { Contact } from "./Component/Contact ";
import { Portfolio } from "./Page/Portfolio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />

      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
