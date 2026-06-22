import { useState } from "react";

function AccessibilityPanel() {
  const [darkMode, setDarkMode] = useState(false);
  const [largeText, setLargeText] = useState(false);

  const toggleDarkMode = () => {
    document.body.style.background = darkMode ? "#f4f7fb" : "#121212";
    document.body.style.color = darkMode ? "#222" : "#ffffff";
    setDarkMode(!darkMode);
  };

  const toggleTextSize = () => {
    document.body.style.fontSize = largeText ? "16px" : "20px";
    setLargeText(!largeText);
  };

  return (
    <div className="card">
      <h2>♿ Accessibility</h2>

      <button onClick={toggleDarkMode}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <br />
      <br />

      <button onClick={toggleTextSize}>
        {largeText ? "Normal Text" : "Large Text"}
      </button>
    </div>
  );
}

export default AccessibilityPanel;
