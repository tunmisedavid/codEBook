import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
// import "react-toastify/dist/react-toastify.css";

import { FilterProvider, CartProvider } from "./context";

import { ScrolToTop } from "./components";

import "./index.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <CartProvider>
        <FilterProvider>
          <ScrolToTop />
          <ToastContainer
            autoClose={500}
            closeButton={false}
            position={"bottom-right"}
          />
          <App />
        </FilterProvider>
      </CartProvider>
    </Router>
  </StrictMode>
);
