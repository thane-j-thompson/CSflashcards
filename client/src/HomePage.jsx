import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/Flashcard.png";

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Interview Flashcards</h3>
        <img
          src={logo}
          alt="logo"
          style={{ maxWidth: "400px", height: "auto" }}
        />
        <Link to="/converter" className="App-link">
          Q&A Review and Convert to JSON
        </Link>
        <Link to="/dialogue" className="App-link">
          Dialogue
        </Link>
      </header>
    </div>
  );
}

export default HomePage;
