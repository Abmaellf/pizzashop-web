import "./index.css";

// import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from "react-router-dom";

import { Router } from "./router";

export function App() {
  return (
    <BrowserRouter>
      {/* <HelmetProvider> */}
      {/* <Helmet titleTemplate="%s | Pizza.Shop" /> */}
      <Router />
      {/* </HelmetProvider> */}
    </BrowserRouter>
  );
}
