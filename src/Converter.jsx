import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Converter() {
  const [qaPairs, setQaPairs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/q-and-a.txt")
      .then((response) => response.text())
      .then((text) => {
        const lines = text.split("\n");
        const pairs = [];
        for (let i = 0; i < lines.length; i += 2) {
          pairs.push({ Question: lines[i], Answer: lines[i + 1] });
        }
        setQaPairs(pairs);
      })
      .catch((error) => {
        console.error("Error fetching the text file: ", error);
      });
  }, []);

  const handleNext = () => {
    const answerElement = document.querySelector(".accordion-answer");
    if (answerElement) {
      answerElement.style.display = "none";
    }
    setCurrentIndex((prev) => (prev + 1 < qaPairs.length ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  const downloadJson = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(qaPairs));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "qa_pairs.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const toggleAccordion = () => {
    const answerElement = document.querySelector(".accordion-answer");
    if (answerElement.style.display === "none") {
      answerElement.style.display = "block";
    } else {
      answerElement.style.display = "none";
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div
          className="qa-container"
          style={{
            backgroundColor: "white",
            color: "black",
            marginTop: 30,
            marginRight: 30,
            marginLeft: 30,
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10,
            marginBottom: 10,
          }}
        >
          <div className="accordion">
            {qaPairs[currentIndex] ? (
              <>
                <button
                  className="accordion-question"
                  onClick={toggleAccordion}
                >
                  <h3>{qaPairs[currentIndex].Question}</h3>
                </button>
                <div className="accordion-answer" style={{ display: "none" }}>
                  <h6>{qaPairs[currentIndex].Answer}</h6>
                </div>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
        <div
          className="action-buttons-container"
          style={{
            backgroundColor: "white",
            color: "white",
            marginRight: 10,
            marginLeft: 10,
            paddingTop: 10,
            paddingBottom: 10,
            marginBottom: 10,
          }}
        >
          <div className="row">
            <button
              onClick={handlePrev}
              style={{
                backgroundColor: "blue",
                color: "white",
                marginRight: 10,
                marginLeft: 10,
                paddingTop: 10,
                paddingBottom: 10,
                marginBottom: 10,
              }}
            >
              <span style={{ fontSize: "40px" }}>&larr;</span>
            </button>
            <button
              onClick={handleNext}
              style={{
                backgroundColor: "blue",
                color: "white",
                marginRight: 10,
                marginLeft: 10,
                paddingTop: 10,
                paddingBottom: 10,
                marginBottom: 10,
              }}
            >
              <span style={{ fontSize: "40px" }}>&rarr;</span>
            </button>
          </div>
        </div>

        <div
          className="data-manip-container"
          style={{
            backgroundColor: "white",
            color: "black",
            marginRight: 10,
            marginLeft: 10,
            paddingTop: 10,
            paddingBottom: 10,
            marginBottom: 10,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <h6>
            This page reads the text file of questions and answers
            (q-and-a.txt). You can download to JSON format here:{" "}
          </h6>
          <button
            onClick={downloadJson}
            style={{
              backgroundColor: "blue",
              color: "white",
              paddingTop: 10,
              paddingBottom: 10,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            Download JSON
          </button>
        </div>
        <Link to="/" className="App-link">
          Return To Home
        </Link>
      </header>
    </div>
  );
}

export default Converter;
