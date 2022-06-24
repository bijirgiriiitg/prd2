import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./coursepage.CFTRI.css";
import "react-tabs/style/react-tabs.css";
import Card1 from "./src/card";
import App from "./src/App";
import { Card } from "react-bootstrap";
export default function CoursePageCFTRI() {
  const [tab, setTab] = useState("GATE");

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
      <Tabs className="tab">
        <TabList className="tablist">
          <Tab onClick={() => setTab("GATE")}>
            <span className="tab1">GATE</span>
          </Tab>

          <Tab onClick={() => setTab("CFTRI")}>
            <span className="tab1"> CFTRI </span>
          </Tab>

          <Tab onClick={() => setTab("CFS/SO")}>
            <span className="tab1">CFS/SO</span>
          </Tab>

          <Tab onClick={() => setTab("ICAR")}>
            <span className="tab1">ICAR</span>{" "}
          </Tab>
        </TabList>
        <TabPanel >
          <span className="heading">
            <span className="heading1">GATE - </span>
            Winner's Preparation Package
          </span>
          <div className="description">
              WLorem ipsum dolor sit amet, consectetur ad ipiscing elit. Integer
              nec odio. Praesent libero Sed cursus ante dapibus diam. Sed nisi.
              Nbcnt per conubia nostra, per inceptos himenaeos. ante dapibus
              diam.
            </div>
            <Card1/>
          <span className="heading">
            <span className="heading1">GATE - Subject Wise Preparation Packages</span>
          </span>
          <App/>
        </TabPanel>
        <TabPanel>
            <span className="heading">
              <span className="heading1">CFTRI- </span>
              Winner's Preparation Package
            </span>
            <div className="description">
              WLorem ipsum dolor sit amet, consectetur ad ipiscing elit. Integer
              nec odio. Praesent libero Sed cursus ante dapibus diam. Sed nisi.
              Nbcnt per conubia nostra, per inceptos himenaeos. ante dapibus
              diam.
            </div>
            <Card1/>
          <span className="heading">
            <span className="heading1">GATE - Subject Wise Preparation Packages</span>
          </span>
          <App/>
        </TabPanel>
        <TabPanel>
          <span className="heading">
            <span className="heading1">CFS/SO- </span>
            Winner's Preparation Package
          </span>
        </TabPanel>
        <TabPanel>
          <span className="heading">
            <span className="heading1">ICAR- </span>
            Winner's Preparation Package
          </span>
        </TabPanel>
      </Tabs>
    </div>
  );
  
}
