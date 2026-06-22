function Navbar() {
  return (
    <nav
      style={{
        background: "#1E40AF",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h2>Personalized Learning Agent</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Dashboard
        </a>

        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Roadmap
        </a>

        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          AI Tutor
        </a>

        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Progress
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
