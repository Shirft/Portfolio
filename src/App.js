import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar></Navbar>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
