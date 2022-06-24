import { useState } from "react";
import "./coursepage.CFTRI.css";
import "react-tabs/style/react-tabs.css";
import Appa from "./Ap";
import { Card } from "react-bootstrap";
export default function CoursePage() {
  const [tab] = useState("GATE");

  console.log("tab1", tab);
  return (
    <div className="App">
      <div className="container">
     
        <Card.Img
          className="img"
          variant="left"
          src="images/cover.jpg"
        />
      </div>
      <Appa/>
    </div>
  );
  
}
