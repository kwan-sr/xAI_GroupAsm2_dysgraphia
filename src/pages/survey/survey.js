import React, { useState } from "react";
import "./survey.css";

function SurveyScreen({ onSubmit }) {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [education, setEducation] = useState("");

  const isFormComplete = age && gender && education;

  return (
    <div className="survey-container">
      <div className="survey-box">
        <h1 className="survey-title">Demographic Survey</h1>

        <div className="survey-section">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            min="1"
            max="120"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="survey-section">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="nonbinary">Non-binary</option>
            <option value="prefer_not_to_say">Prefer not to say</option>
          </select>
        </div>

        <div className="survey-section">
          <label htmlFor="education">Education Level</label>
          <select
            id="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          >
            <option value="">Select</option>
            <option value="high_school">High school or lower</option>
            <option value="college">Some college or undergrad</option>
            <option value="grad">Graduate or professional</option>
          </select>
        </div>

        <button
          className="survey-button"
          onClick={() =>
            onSubmit({ age, gender, education })
          }
          disabled={!isFormComplete}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default SurveyScreen;
