import roadmap from "../data/roadmapData";

function Roadmap() {
  return (
    <div className="card">
      <h2>📍 Learning Roadmap</h2>

      <ul style={{ marginTop: "20px" }}>
        {roadmap.map((topic) => (
          <li
            key={topic.id}
            style={{
              listStyle: "none",
              padding: "10px",
              marginBottom: "10px",
              background: "#F3F4F6",
              borderRadius: "8px"
            }}
          >
            <strong>{topic.title}</strong>

            <br />

            Status: {topic.completed ? "✅ Completed" : "🔒 Locked"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Roadmap;
