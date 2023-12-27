import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DialoguePage() {
  const [lines, setLines] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/q-and-a.txt")
      .then((response) => response.text())
      .then((text) => {
        const textLines = text.split("\n");
        console.log("textLines: ", textLines);
        setLines(textLines);
      })
      .catch((error) => {
        console.error("Error fetching the text file: ", error);
      });
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 < lines.length ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>{lines[currentIndex]}</p>
        <button onClick={handlePrev}>Backward</button>
        <button onClick={handleNext}>Forward</button>
        <Link to="/" className="App-link">
          Return To Home
        </Link>
      </header>
    </div>
  );
}

export default DialoguePage;
