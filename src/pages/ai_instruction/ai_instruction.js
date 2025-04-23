import React from "react";
import "./ai_instruction.css";

function AIInstructionScreen({ onContinue }) {
  return (
    <div className="instruction-container">
      <div className="instruction-box">
        <h1 className="instruction-title">Instructions</h1>
        <p className="instruction-text">
          In this task, you will be evaluating handwriting samples of young children ages 6-10 to evaluate dysgraphia risk.
        </p>
        <p className="instruction-text">
          Dysgraphia is a learning disability that makes writing very difficult. Some children with dysgraphia have very messy handwriting, but not all of them do. The condition can have subtle effects.
        </p>
        <p className="instruction-text">
          You will see some information about the child and an image of the child's handwriting, as well as an AI prediction and its explanation. Then you will be asked to decide whether the individual is at high or low risk of dysgraphia. The AI has been trained on similar images of low vs high dysgraphia risk, but it sometimes make mistakes.
        </p>
        <p className="instruction-text">
          Please note that the child writes in Malay, which uses the roman alphabet, so you can evaluate handwriting form based on what you see, even if you can't read the text.
        </p>
        <p className="instruction-text">
          Make your best judgment based on the information provided. Remember that the AI is not a perfect predictor, so try to integrate its information with your contextual knowledge and common sense.
        </p>
        <p className="instruction-text">
          Click "Continue" when you're ready to begin the practice round.
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
