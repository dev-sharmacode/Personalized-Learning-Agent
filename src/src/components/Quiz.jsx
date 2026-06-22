import { useState } from "react";
import quizData from "../data/quizData";

function Quiz() {
  const [selected, setSelected] = useState("");
  const [result, setResult] = useState("");

  const quiz = quizData[0];

  const checkAnswer = () => {
    if (selected === quiz.answer) {
      setResult("✅ Correct!");
    } else {
      setResult("❌ Wrong Answer");
    }
  };

  return (
    <div className="card">
      <h2>📝 Quiz</h2>

      <p>{quiz.question}</p>

      {quiz.options.map((option) => (
        <div key={option}>
          <label>
            <input
              type="radio"
              value={option}
              checked={selected === option}
              onChange={(e) => setSelected(e.target.value)}
            />

            {" "}

            {option}
          </label>

          <br />
          <br />
        </div>
      ))}

      <button onClick={checkAnswer}>
        Submit
      </button>

      {result && (
        <p
          style={{
            marginTop: "20px",
            fontWeight: "bold"
          }}
        >
          {result}
        </p>
      )}
    </div>
  );
}

export default Quiz;
