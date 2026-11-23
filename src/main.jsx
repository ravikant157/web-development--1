import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
createRoot(document.getElementById("root")).render("hello world!")
createRoot(document.getElementById("root")).render(<App/>)


// libraries :-
// react 
// react dom

// create root acts like a bridge ( makes a connection) between main.jsx
// and index.html


// render() is used to display content on UI.

// two types of component
// function based component 
// class based component


