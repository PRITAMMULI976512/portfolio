import React, { useEffect, useState } from "react";
import NAvbsr from "./NAvbsr";
import photo from "./images/photo.png";
import About from "./About";

function Home() {
  const [widthofscreen, setWidthofscreen] = useState();
  const widthScreen = () => {
    let width = window.screen.width;
    setWidthofscreen(width);
    console.log(width);
  };
  useEffect(() => {
    widthScreen();
  }, [widthofscreen]);

  console.log(widthofscreen);
  return (
    <>
      <NAvbsr />
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-12  intro">
          My self
          <h1>PRITAM MULI</h1>
          <h5>
            System engineer @ TCS | JavaScript | HTML | CSS | ReactJs | React
            Native | Jira | Git
          </h5>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12 image_section_container">
          {widthofscreen > 576 ? (
            <img src={photo} className="image_section"></img>
          ) : null}{" "}
        </div>
      </div>
      <About />
    </>
  );
}

export default Home;
