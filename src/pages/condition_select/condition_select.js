import React, { useState } from "react";
import "./condition_select.css";

function ConditionSelectScreen({ onSelect }) {

  return (
    <div className="intro-container">
      <div className="intro-box">
        <h1 className="intro-title">
          Which condition are you assigned to?
        </h1>

        <div className="practice-section">
          <div className="radio-group">
            <button
              className="condA-button"
              onClick={() => onSelect("A")}
            >
              Conditon A
            </button>
            <button
              className="condB-button"
              onClick={() => onSelect("B")}
            >
              Conditon B
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ConditionSelectScreen;
