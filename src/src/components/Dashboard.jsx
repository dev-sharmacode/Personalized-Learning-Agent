import React from "react";
import Navbar from "./Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="container dashboard">
        <h1>Welcome Back 👋</h1>

        <p>
          Continue your personalized learning journey with AI-powered guidance.
        </p>

        <div className="cards">

          <div className="card">
            <h3>📚 Current Course</h3>
            <p>Artificial Intelligence Fundamentals</p>
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

        <button>Continue Learning</button>

      </main>
    </>
  );
}

export default Dashboard;
export default Dashboard;
