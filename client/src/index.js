import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { CategoriesProvider } from "./context/categories.context";
import { HeadlinesProvider } from "./context/headlines.context";
import { ExhibitionsProvider } from "./context/exhibitions.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoriesProvider>
        <HeadlinesProvider>
          <ExhibitionsProvider>
            <App />
          </ExhibitionsProvider>
        </HeadlinesProvider>
      </CategoriesProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
