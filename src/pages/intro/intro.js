import React, { useState } from "react";
import "./intro.css";

function IntroScreen({ onStart }) {
  const [consent, setConsent] = useState(false);

  return (
    <div className="intro-container">
      <div className="intro-box">
        <h1 className="intro-title">
          Welcome to the study on human-AI interaction in Dysgraphia diagnosis
        </h1>
        <p className="intro-text">
          In this study, you will be teaming up with an AI to make predictions
          about dysgraphia. If you agree to participate, check the box and click
          the start button to continue.
        </p>
        <div className="intro-consent">
          <label>
            <input
              type="checkbox"
              checked={consent}
              onChange={() => setConsent(!consent)}
            />
            <span>I agree to participate in this experiment</span>
          </label>
        </div>
        <button
          className="intro-button"
          onClick={() => window.location.assign("/#/condition_select")}
          disabled={!consent}
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default IntroScreen;
