import React from "react";
import ReactDOM from "react-dom/client";

export default function Test() {
  return <div>React rendered...</div>;
}

const app = document.getElementById("app");
ReactDOM.createRoot(app).render(<Test />);
