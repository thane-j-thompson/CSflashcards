// import React from "react";
// import "./App.css";
// //import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./HomePage";
// import DialoguePage from "./DialoguePage";
// import Converter from "./Converter";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/dialogue" element={<DialoguePage />} />
//         <Route path="/converter" element={<Converter />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { useState, useEffect } from 'react';

function App() {
  const [qaPairs, setQaPairs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/flashcards')
      .then((res) => res.json())
      .then((data) => setQaPairs(data));
  }, []);

  const handleShowAnswer = () => setShowAnswer(true);
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % qaPairs.length);
    setShowAnswer(false);
  };

  if (qaPairs.length === 0) return <p>Loading...</p>;

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Flashcard {currentIndex + 1}</h2>
      <p><strong>{qaPairs[currentIndex].Question.trim()}</strong></p>

      {showAnswer && (
        <p style={{ marginTop: '1rem', color: 'green' }}>
          {qaPairs[currentIndex].Answer.trim()}
        </p>
      )}

      <div style={{ marginTop: '2rem' }}>
        {!showAnswer && <button onClick={handleShowAnswer}>Show Answer</button>}
        {showAnswer && <button onClick={handleNext}>Next Question</button>}
      </div>
    </div>
  );
}

export default App;

