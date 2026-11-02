import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Content protection: disable right-click / context menu everywhere on the site.
// (A matching inline script in index.html blocks it even before the app loads.)
const blockContextMenu = (e: Event) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
};
window.addEventListener("contextmenu", blockContextMenu, { capture: true });
document.addEventListener("contextmenu", blockContextMenu, { capture: true });

createRoot(document.getElementById("root")!).render(<App />);
