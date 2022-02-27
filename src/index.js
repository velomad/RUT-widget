import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const WidgetDivs = document.querySelectorAll(".rut-container");

// Inject our React App into each
WidgetDivs.forEach((Div) => {
  ReactDOM.render(
    <React.Fragment>
      <App />
    </React.Fragment>,
    Div
  );
});
