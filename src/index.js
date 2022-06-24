import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import CoursePageCFTRI from "./CoursePageCFTRI";
//import ReactDOM from "react-dom";
import CoursePage from "./love";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//ReactDOM.render(<App />, document.getElementById("root"));
root.render(
  <StrictMode>
    <CoursePage />
  </StrictMode>
);
