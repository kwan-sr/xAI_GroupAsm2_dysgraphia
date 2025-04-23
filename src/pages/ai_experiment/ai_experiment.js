import React, { useState, useEffect } from "react";
import "./ai_experiment.css";

function AIExperimentScreen({ aiPrediction, onContinue }) {
  const [userPrediction, setUserPrediction] = useState("");
  const [trialOrder, setTrialOrder] = useState([]);
  const [results, setResults] = useState([]);
  const [trialIndex, setTrialIndex] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());

  const contextualInfo = [
    "Child's age: 7 years old\nWriting experience: Standard classroom instruction\nEducational history: Recently returned to school after extended illness\nOther notable comments: Shows increased confidence when using colored pencils or markers",
    "Child's age: 8 years old\nWriting experience: Learned to write in a different language first\nEducational history: Malay as second language learner, in mainstream classroom for 1 year\nOther notable comments: Parents report child is perfectionistic about schoolwork at home",
    "Child's age: 9 years old\nWriting experience: Experienced different writing instruction approaches with each school change\nEducational history: Changed schools three times in the past two years\nOther notable comments: Writing quality varies dramatically depending on interest in topic",
    "Child's age: 7 years old\nWriting experience: Just beginning formal writing instruction\nEducational history: Skipped kindergarten (youngest in class)\nOther notable comments: Often sacrifices quality for speed to have more time for preferred activities",
    "Child's age: 9 years old\nWriting experience: Consistent instruction since kindergarten\nEducational history: Performing at grade level across all subjects\nOther notable comments: Enjoys creative writing and keeps a personal journal",
    "Child's age: 8 years old\nWriting experience: Traditional classroom instruction\nEducational history: Excelling in language arts\nOther notable comments: Frequently volunteers to write answers on the board during class",
    "Child's age: 7 years old\nWriting experience: Learned writing in kindergarten and first grade\nEducational history: Is having a hard time catching up with peers in first grade\nOther notable comments: Dislikes handwriting homework",
    "Child's age: 10 years old\nWriting experience: Has received extra writing support for two years\nEducational history: Consistent attendance at the same school since kindergarten\nOther notable comments: Asks for frequent breaks during writing tasks",
    "Child's age: 8 years old\nWriting experience: Standard classroom instruction and a writing tutor\nEducational history: Participates in gifted program for science\nOther notable comments: Spends more time than peers on writing assignments",
    "Child's age: 10 years old\nWriting experience: Traditional classroom instruction with some supplemental general help\nEducational history: Recent transfer student, incomplete records from previous school\nOther notable comments: Has developed several creative workarounds to minimize writing length",
    "Child's age: 7 years old\nWriting experience: Regular classroom instruction plus weekly tutoring\nEducational history: Had a three-month gap in formal education due to family relocation\nOther notable comments: Teacher has noticed this child often goes back and erases if they don’t think their writing looks good enough",
    "Child's age: 8 years old\nWriting experience: Began writing instruction in kindergarten\nEducational history: Receiving special education services since first grade\nOther notable comments: Expresses anxiety before writing tasks",
    "Child's age: 8 years old\nWriting experience: Has been using assistive technology for writing\nEducational history: Recently began receiving additional support services\nOther notable comments: Parents report child often feels frustrated despite putting in significant effort",
    "Child's age: 9 years old\nWriting experience: Has had occupational therapy for writing since age 6\nEducational history: Participates in advanced reading group\nOther notable comments: Highly motivated and spends extra time practicing writing at home",
    "Child's age: 9 years old\nWriting experience: Has had consistent writing instruction since age 5\nEducational history: Recently moved from a different school district with different curriculum\nOther notable comments: Prefers to dictate stories to parents rather than writing them down",
    "Child's age: 7 years old\nWriting experience: Regular classroom instruction since kindergarten\nEducational history: Excels in math and science but struggles with language arts\nOther notable comments: Becomes emotionally upset when asked to write more than a few sentences"
  ];

  const aiPredictions = [
    "Low risk of dysgraphia",
    "Low risk of dysgraphia",
    "Low risk of dysgraphia",
    "Low risk of dysgraphia",
    "Low risk of dysgraphia",
    "Low risk of dysgraphia",
    "High risk of dysgraphia",
    "High risk of dysgraphia",
    "High risk of dysgraphia",
    "High risk of dysgraphia",
    "High risk of dysgraphia",
    "High risk of dysgraphia",
    "High risk of dysgraphia",
    "High risk of dysgraphia",
    "High risk of dysgraphia",
    "High risk of dysgraphia"
  ];

  const totalTrials = 16;


  // Initialize trials on mount
  useEffect(() => {
    const order = Array.from({ length: totalTrials }, (_, i) => i);
    const shuffled = order.sort(() => Math.random() - 0.5);
    setTrialOrder(shuffled);
    setStartTime(Date.now());
  }, []);

  if (trialOrder.length === 0) return null; // Wait until trials are loaded

  console.log(trialOrder)

  const trialNum = trialOrder[trialIndex];

  // 🟩 Image sources per trial
  const handwritingImg = `images/handwriting_sample_${trialNum + 1}.jpg`;
  const positiveExampleImg = `images/first_prototype_${trialNum + 1}.jpg`;
  const negativeExampleImg = `images/second_prototype_${trialNum + 1}.jpg`;

  const handleContinue = () => {
    const endTime = Date.now();
    const timeDiffSeconds = (endTime - startTime) / 1000;

    const result = {
      imageNumber: trialNum + 1,
      aiPrediction: aiPredictions[trialNum],
      userPrediction,
      contextualInfo: contextualInfo[trialNum],
      timeSeconds: timeDiffSeconds,
    };

    const updatedResults = [...results, result];

    if (trialIndex < totalTrials - 1) {
      setTrialIndex(trialIndex + 1);
      setStartTime(Date.now());
      setUserPrediction("");
      setResults(updatedResults);
      console.log(updatedResults);
    } else {
      // Last trial – submit all
      onContinue(updatedResults);
    }
  };

   

  return (
    <div className="experiment-container">
      <div className="experiment-box">
        <h1 className="experiment-title">Experiment Trial {trialIndex + 1} / 16</h1>

        <div className="experiment-section">
          <h2>Contextual Information</h2>
          <p>{contextualInfo[trialNum]}</p> 
          <p>Handwriting sample for dysgraphia risk evaluation.</p>
        </div>

        <div className="experiment-image">
          <img
            src={handwritingImg}
            alt={`Handwriting Sample ${trialNum + 1}`}
            className="sample-image"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <div className="experiment-section">
          <h2>AI Prediction</h2>
          <p className="ai-output">{aiPredictions[trialNum]}</p>
          <p className="ai-expl-description">The AI finds images in its dataset that is most similar to the current writing sample that align with its prediction and display 2 below.</p>
          
          <div className="ai-examples">
            <div className="ai-example-box">
              <p className="example-label">Example: {aiPredictions[trialNum]}</p>
              <img src={positiveExampleImg} alt="Positive example" className="example-image"  style={{ width: '100%', height: 'auto' }} />
              
            </div>
            <div className="ai-example-box">
              <p className="example-label">Example: {aiPredictions[trialNum]}</p>
              <img src={negativeExampleImg} alt="Negative example" className="example-image"  style={{ width: '100%', height: 'auto' }}/>
            </div>
          </div>
        </div>

        <div className="experiment-section">
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
          className="experiment-button"
          onClick={handleContinue}
          disabled={!userPrediction}
        >
          {trialIndex < 15 ? "Continue" : "Finish"}
        </button>
      </div>
    </div>
  );
}

export default AIExperimentScreen;
