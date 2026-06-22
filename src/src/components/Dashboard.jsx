import React from "react";

function Dashboard() {
  return (
    <>
      <header>
        <div className="container">
          <h1>🎓 Personalized Learning Agent</h1>
        </div>
      </header>

      <main className="container dashboard">

        <h2>Welcome Back, Learner 👋</h2>
        <p>
          Continue your personalized learning journey with AI-powered guidance.
        </p>

        <br />

        <div className="cards">

          <div className="card">
            <h3>📚 Current Course</h3>
            <p>Introduction to Artificial Intelligence</p>
          </div>

          <div className="card">
            <h3>🔥 Learning Streak</h3>
            <p>7 Days</p>
          </div>

          <div className="card">
            <h3>⭐ XP Earned</h3>
            <p>520 XP</p>
          </div>

          <div className="card">
            <h3>🎯 Progress</h3>
            <p>35% Completed</p>
          </div>

        </div>

        <br />

        <button>Continue Learning</button>

      </main>
    </>
  );
}

export default Dashboard;
