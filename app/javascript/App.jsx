import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Helpline from "./components/Helpline";

export default function App() {
  return (
    <main className="dark">
      <Helpline />
      <Navbar />
      <Intro />
    </main>
  );
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
