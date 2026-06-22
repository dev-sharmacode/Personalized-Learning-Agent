import { useState } from "react";

function TutorChat() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const askTutor = () => {
    if (!question.trim()) return;

    setResponse(
      "🤖 AI Tutor: Great question! This is a demo response. Once Gemini API is connected, you'll receive intelligent, personalized answers here."
    );
  };

  return (
    <div className="card">
      <h2>AI Tutor</h2>

      <input
        type="text"
        placeholder="Ask your question..."
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
        onClick={askTutor}
        style={{ marginTop: "15px" }}
      >
        Ask AI
      </button>

      {response && (
        <div
          style={{
            marginTop: "20px",
            background: "#f3f4f6",
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
