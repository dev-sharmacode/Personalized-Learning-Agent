import { useState } from "react";
import { askGemini } from "../services/geminiService";

function TutorChat() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = async () => {
    if (!question.trim()) return;

    setResponse("Thinking...");

    const answer = await askGemini(question);

    setResponse(answer);
  };

  return (
    <div className="card">
      <h2>🤖 AI Tutor</h2>

      <input
        type="text"
        placeholder="Ask anything..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "15px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />

      <button
        onClick={handleAsk}
        style={{ marginTop: "15px" }}
      >
        Ask AI
      </button>

      {response && (
        <div
          style={{
            marginTop: "20px",
            background: "#EEF2FF",
            padding: "15px",
            borderRadius: "10px"
          }}
        >
          {response}
        </div>
      )}
    </div>
  );
}

export default TutorChat;
