import React from "react";
import "./no_ai_instruction.css";

function NoAIInstructionScreen() {
  return (
    <div className="instruction-container">
      <div className="instruction-box">
        <h1 className="instruction-title">Instructions (No AI)</h1>
        <p className="instruction-text">
          In this version of the task, you will be evaluating handwriting samples **without any AI assistance**.
        </p>
        <p className="instruction-text">
          You will be shown 2 handwriting images and asked to decide whether the individual is at high or low risk of dysgraphia.
        </p>
        <p className="instruction-text">
          Make your best judgment based solely on the visual information provided.
        </p>
        <p className="instruction-text">
          Click "Continue" when you're ready to begin the practice round.
        </p>

        <button
          className="instruction-button"
          onClick={() => window.location.assign("/#/no_ai_practice")}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default NoAIInstructionScreen;
