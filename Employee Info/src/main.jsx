import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import SearchBarById from "./Componants/SeachBarById.jsx";
import SearchPageById from "./Pages/SearchPageById.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  
  </StrictMode>,
);
