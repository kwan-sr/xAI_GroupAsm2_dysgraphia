import React, { useState } from "react";
import "./no_ai_practice.css";

function NoAIPracticeScreen({ onContinue }) {
  const [userPrediction, setUserPrediction] = useState("");

  return (
    <div className="practice-container">
      <div className="practice-box">
        <h1 className="practice-title">Practice Trial (No AI)</h1>

        <div className="practice-section">
          <h2>Contextual Information</h2>
          <p>Review the handwriting sample and make your own prediction.</p>
        </div>

        <div className="practice-image">
          <div className="image-placeholder">[Image Placeholder]</div>
        </div>

        <div className="practice-section">
          <h2>Your Prediction</h2>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="prediction"
                value="low"
                checked={userPrediction === "low"}
                onChange={() => setUserPrediction("low")}
              />
              Low Risk
            </label>
            <label>
              <input
                type="radio"
                name="prediction"
                value="high"
                checked={userPrediction === "high"}
                onChange={() => setUserPrediction("high")}
              />
              High Risk
            </label>
          </div>
        </div>

        <button
          className="practice-button"
          onClick={() => onContinue(userPrediction)}
          disabled={!userPrediction}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default NoAIPracticeScreen;
