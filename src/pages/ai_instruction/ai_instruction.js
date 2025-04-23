import React from "react";
import "./ai_instruction.css";

function AIInstructionScreen({ onContinue }) {
  return (
    <div className="instruction-container">
      <div className="instruction-box">
        <h1 className="instruction-title">Instructions</h1>
        <p className="instruction-text">
          In this study, you will be shown 2 handwriting samples. For each one,
          the AI will provide its prediction about whether the individual has
          dysgraphia. You will also be asked to make your own prediction: high
          risk or low risk.
        </p>
        <p className="instruction-text">
          Try to use both your own judgment and the AI's input to make a
          decision. Some images are for practice, while others are part of the
          main experiment.
        </p>
        <p className="instruction-text">
          Click "Continue" when you're ready to begin.
        </p>
        <button
          className="instruction-button"
          onClick={() => window.location.assign("/#/ai_practice")}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default AIInstructionScreen;
