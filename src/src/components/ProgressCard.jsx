function ProgressCard() {
  const progress = 35;

  return (
    <div className="card">
      <h2>Learning Progress</h2>

      <p>Overall Completion</p>

      <div
        style={{
          width: "100%",
          background: "#ddd",
          borderRadius: "10px",
          marginTop: "10px"
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            background: "#2563eb",
            color: "white",
            textAlign: "center",
            borderRadius: "10px",
            padding: "8px"
          }}
        >
          {progress}%
        </div>
      </div>

      <br />

      <p><strong>XP Earned:</strong> 520 XP</p>
      <p><strong>Learning Streak:</strong> 🔥 7 Days</p>
    </div>
  );
}

export default ProgressCard;
