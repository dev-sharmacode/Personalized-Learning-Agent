function Roadmap() {
  const topics = [
    { title: "Introduction", status: "Completed" },
    { title: "Variables", status: "Completed" },
    { title: "Loops", status: "In Progress" },
    { title: "Functions", status: "Locked" }
  ];

  return (
    <div className="card">
      <h2>📍 Learning Roadmap</h2>

      <ul style={{ marginTop: "15px", lineHeight: "2" }}>
        {topics.map((topic, index) => (
          <li key={index}>
            <strong>{topic.title}</strong> — {topic.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Roadmap;
