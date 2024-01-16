import React from "react";
import ReactDOM from "react-dom/client";
import Products from "./components/products";

export default function App() {
  return <Products />;
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
