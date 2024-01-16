import React from "react";
import ReactDOM from "react-dom/client";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

export default function App() {
  return (
    <main>
      <Navbar />
      <Intro />
      <Products />
    </main>
  );
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
