import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app";

// eslint-disable-next-line prettier/prettier
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
