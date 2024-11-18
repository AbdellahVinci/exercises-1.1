import ReactDOM from "react-dom/client";  // Import de ReactDOM.createRoot
import App from "./App";  // Import du composant App

// Sélectionnez l'élément du DOM où vous voulez rendre l'application
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Crée un root avec createRoot
  root.render(<App />); // Rendu du composant App
}
