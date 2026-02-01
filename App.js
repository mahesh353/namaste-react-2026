
import React from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent from "./Heading";

const heading = React.createElement("h1", { id: "heading" }, "Hello from React!");

const jsxHeading = (<h1 id="jsx-heading">Hello from JSX!</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

