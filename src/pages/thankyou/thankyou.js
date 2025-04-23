import React from "react";
import "./thankyou.css";

function ThankYouScreen({ aiPractice, aiExperiment, noAiPractice, noAiExperiment, survey, onReturnHome }) {
  return (
    <div className="thankyou-container">
      <div className="thankyou-box">
        <h1 className="thankyou-title">You are done!</h1>
        <p className="thankyou-text">
          Thank you for participating in this experiment. Your responses have
          been recorded.
        </p>
        <button className="thankyou-button" onClick={onReturnHome}>
          Return to Home
        </button>
      </div>
    </div>
  );
}

export default ThankYouScreen;
