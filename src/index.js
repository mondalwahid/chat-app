import React from "react";
import App from "./App";
import * as ReactDOMClient from "react-dom/client";

// ReactDOM.createRoot(<App />, document.getElementById("root"));

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(<App />);
root.render(<App tab="profile" />);
