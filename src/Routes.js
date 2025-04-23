import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import IntroScreen from "./pages/intro/intro";
import AIInstructionScreen from "./pages/ai_instruction/ai_instruction";
import AIPracticeScreen from "./pages/ai_practice/ai_practice";
import AIExperimentScreen from "./pages/ai_experiment/ai_experiment";
import NoAIInstructionScreen from "./pages/no_ai_instruction/no_ai_instruction";
import NoAIPracticeScreen from "./pages/no_ai_practice/no_ai_practice";
import NoAIExperimentScreen from "./pages/no_ai_experiment/no_ai_experiment";
import SurveyScreen from "./pages/survey/survey";
import ThankYouScreen from "./pages/thankyou/thankyou";
import ConditionSelectScreen from "./pages/condition_select/condition_select";

const AppRoutes = () => {
  // Data State
  const [condition, setCondition] = useState(null); // A for AI or B for No AI
  const [surveyData, setSurveyData] = useState({});
  const [experimentResponse, setExperimentResponse] = useState(null);

  // Simulated AI predictions hardcoded for now but should change this!
  const aiPracticePrediction = "Low risk of dysgraphia";

  // Save function triggered from Thank You screen
  const handleReturnHome = () => {
    console.log("returning home now")
    const result = {
      timestamp: new Date().toISOString(),
      survey: surveyData,
      condition: condition,
      experiment: experimentResponse
    };

    console.log(result)

    const blob = new Blob([JSON.stringify(result, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "participant_data.json");
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    window.location.assign("/#/");
  };

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<IntroScreen />} />
        <Route path="/intro" element={<IntroScreen />} />

        <Route
          path="/condition_select"
          element={
            <ConditionSelectScreen
              onSelect={(chosenCondition) => {
                setCondition(chosenCondition);
                if (chosenCondition === "A") {
                  window.location.assign("/#/ai_instruction");
                } else {
                  window.location.assign("/#/no_ai_instruction");
                }
              }}
            />
          }
        />


    {condition === "A" && (
          <>
            <Route path="/ai_instruction" element={<AIInstructionScreen />} />
            <Route
              path="/ai_practice"
              element={
                <AIPracticeScreen
                  aiPrediction={aiPracticePrediction}
                  onContinue={() => {
                    window.location.assign("/#/ai_experiment");
                  }}
                />
              }
            />
            <Route
              path="/ai_experiment"
              element={
                <AIExperimentScreen
                onContinue={(results) => {
                  setExperimentResponse(results);
                  window.location.assign("/#/survey");
                }}
              />
              }
            />
          </>
        )}

        {condition === "B" && (
          <>
            <Route
              path="/no_ai_instruction"
              element={<NoAIInstructionScreen />}
            />
            <Route
              path="/no_ai_practice"
              element={
                <NoAIPracticeScreen
                  onContinue={() => {
                    window.location.assign("/#/no_ai_experiment");
                  }}
                />
              }
            />
            <Route
              path="/no_ai_experiment"
              element={
                <NoAIExperimentScreen
                  onContinue={(results) => {
                    setExperimentResponse({ results });
                    window.location.assign("/#/survey");
                  }}
                />
              }
            />
          </>
        )}

{/* 
        <Route path="/ai_instruction" element={<AIInstructionScreen />} />
        <Route
          path="/ai_practice"
          element={
            <AIPracticeScreen
              aiPrediction={aiPracticePrediction}
              onContinue={(userPrediction) => {
                setAiPracticeResponse({
                  userPrediction,
                  aiPrediction: aiPracticePrediction,
                });
                window.location.assign("/#/ai_experiment");
              }}
            />
          }
        />

        <Route
          path="/ai_experiment"
          element={
            <AIExperimentScreen
              aiPrediction={aiExperimentPrediction}
              onContinue={(userPrediction) => {
                setAiExperimentResponse({
                  userPrediction,
                  aiPrediction: aiExperimentPrediction,
                });
                window.location.assign("/#/no_ai_instruction");
              }}
            />
          }
        />

        <Route path="/no_ai_instruction" element={<NoAIInstructionScreen />} />

        <Route
          path="/no_ai_practice"
          element={
            <NoAIPracticeScreen
              onContinue={(userPrediction) => {
                setNoAiPracticeResponse({ userPrediction });
                window.location.assign("/#/no_ai_experiment");
              }}
            />
          }
        />

        <Route
          path="/no_ai_experiment"
          element={
            <NoAIExperimentScreen
              onContinue={(userPrediction) => {
                setNoAiExperimentResponse({ userPrediction });
                window.location.assign("/#/survey");
              }}
            />
          }
        /> */}

        <Route
          path="/survey"
          element={
            <SurveyScreen
              onSubmit={(data) => {
                setSurveyData(data);
                window.location.assign("/#/thankyou");
              }}
            />
          }
        />

        <Route
          path="/thankyou"
          element={
            <ThankYouScreen
              survey={surveyData}
              onReturnHome={handleReturnHome}
              condition={condition}
              experiment={experimentResponse}
            />
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
