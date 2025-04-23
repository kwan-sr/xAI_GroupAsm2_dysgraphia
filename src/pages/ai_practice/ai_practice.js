import React, { useState } from "react";
import "./ai_practice.css";

function AIPracticeScreen({ aiPrediction, onContinue }) {
  const [userPrediction, setUserPrediction] = useState("");

  return (
    <div className="practice-container">
      <div className="practice-box">
        <h1 className="practice-title">Practice Trial</h1>

        <div className="practice-section">
          <h2>Contextual Information</h2>
          <p>There will be contextual information here, such as age, writing experience, etc.</p>
          <p>Sample handwriting image and prediction task.</p>
        </div>

        <div className="practice-image">
          <div className="image-placeholder">[Image Placeholder]</div>
        </div>
        

        <div className="practice-section">
          <h2>AI Prediction</h2>
          <p className="ai-output">{aiPrediction}</p>
          <p className="ai-expl-description">The AI finds images in its dataset that is most similar to the current writing sample that align with its prediction and display 2 below.</p>
          <div className="ai-examples">
            <div className="ai-example-box">
              <p className="example-label">Example:{aiPrediction}</p>
              <div className="image-placeholder">[Image Placeholder]</div>
              
            </div>
            <div className="ai-example-box">
              <p className="example-label">Example: {aiPrediction}</p>
              <div className="image-placeholder">[Image Placeholder]</div>
            </div>
          </div>
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

export default AIPracticeScreen;
