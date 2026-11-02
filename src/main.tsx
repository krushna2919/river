// ============= Full file contents ==============

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Content protection: disable right-click / context menu site-wide.
// Exception: form fields (inputs, textareas) keep their context menu so
// visitors can still paste into the contact / donate forms.
document.addEventListener("contextmenu", (e) => {
  const target = e.target as HTMLElement | null;
  const isFormField =
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target?.isContentEditable;
  if (!isFormField) {
    e.preventDefault();
  }
});

createRoot(document.getElementById("root")!).render(<App />);
