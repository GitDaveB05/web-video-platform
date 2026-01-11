export default function Sidebar({ setView }) {
    return (
      <aside className="sidebar">
        <h2>VIDEONET</h2>
        <button onClick={() => setView("home")}>Home</button>
        <button onClick={() => setView("explore")}>Explore</button>
        <button onClick={() => setView("messages")}>Messages</button>
      </aside>
    );
  }
  