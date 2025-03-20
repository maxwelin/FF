import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ActivityContextProvider } from "./components/Providers/ActivityContext.tsx";

createRoot(document.getElementById("root")!).render(
  <ActivityContextProvider>
    <App />
  </ActivityContextProvider>
);
