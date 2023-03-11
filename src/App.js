import "./App.css";
import React from "react";

import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Curriculum from "./pages/Curriculum/Curriculum";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculum" element={<Curriculum />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
