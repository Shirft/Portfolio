import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Aboutme from "./components/Aboutme/Aboutme";
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
          <Route path="/about-me" element={<Aboutme />} />
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
