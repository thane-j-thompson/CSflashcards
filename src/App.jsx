import React from "react";
import "./App.css";
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import DialoguePage from "./DialoguePage";
import Converter from "./Converter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dialogue" element={<DialoguePage />} />
        <Route path="/converter" element={<Converter />} />
      </Routes>
    </Router>
  );
}

export default App;
