import { useState } from "react";

function Quiz() {
  const [selected, setSelected] = useState("");
  const [result, setResult] = useState("");

  const checkAnswer = () => {
    if (selected === "Artificial Intelligence") {
      setResult("✅ Correct! Great job.");
    } else {
      setResult("❌ Incorrect. Try again!");
    }
  };

  return (
    <div className="card">
      <h2>Quick Quiz</h2>

      <p style={{ marginTop: "15px" }}>
        What does AI stand for?
      </p>

      <div style={{ marginTop: "15px" }}>

        <label>
          <input
            type="radio"
            name="quiz"
            value="Artificial Intelligence"
            onChange={(e) => setSelected(e.target.value)}
          />
          Artificial Intelligence
        </label>

        <br /><br />

        <label>
          <input
            type="radio"
            name="quiz"
            value="Advanced Internet"
            onChange={(e) => setSelected(e.target.value)}
          />
          Advanced Internet
        </label>

        <br /><br />

        <label>
          <input
            type="radio"
            name="quiz"
            value="Automated Interface"
            onChange={(e) => setSelected(e.target.value)}
          />
          Automated Interface
        </label>

      </div>

      <button
        style={{ marginTop: "20px" }}
        onClick={checkAnswer}
      >
        Submit Answer
      </button>

      {result && (
        <div
          style={{
            marginTop: "20px",
            background: "#EEF2FF",
            padding: "15px",
            borderRadius: "10px"
          }}
        >
          <strong>{result}</strong>
        </div>
      )}
    </div>
  );
}

export default Quiz;
