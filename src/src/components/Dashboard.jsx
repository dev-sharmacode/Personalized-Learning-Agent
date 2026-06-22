import Navbar from "./Navbar";
import Roadmap from "./Roadmap";
import TutorChat from "./TutorChat";
import Quiz from "./Quiz";
import ProgressCard from "./ProgressCard";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="container dashboard">
        <h1>Welcome Back 👋</h1>

        <p>
          Continue your personalized learning journey with your AI-powered tutor.
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

        <br />

        <ProgressCard />

        <br />

        <Roadmap />

        <br />

        <TutorChat />

        <br />

        <Quiz />

        <br />

        <button>Continue Learning</button>
      </div>
    </>
  );
}

export default Dashboard;
