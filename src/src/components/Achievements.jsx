function Achievements() {
  const badges = [
    "🏅 First Lesson Completed",
    "🔥 7 Day Streak",
    "⭐ 500 XP Earned",
    "🎯 Quiz Master"
  ];

  return (
    <div className="card">
      <h2>Achievements</h2>

      <ul style={{ marginTop: "15px", paddingLeft: "20px" }}>
        {badges.map((badge, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {badge}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Achievements;
