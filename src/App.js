import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./pages/Projects/Projects";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";

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
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
