import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

export default function App() {
  const [view, setView] = useState("home");

  return (
    <div className="app">
      <Sidebar setView={setView} />
      <main className="content">
        {view === "home" && <Home />}
        {view === "explore" && <div>Explore Grid</div>}
        {view === "messages" && <div>Messages</div>}
      </main>
    </div>
  );
}
