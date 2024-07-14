import React, { useEffect, useState } from "react";
import NAvbsr from "./NAvbsr";
import photo from "./images/photo.png";
import About from "./About";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

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
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-1 col-1">
              <Link
                to="https://www.linkedin.com/in/pritam-muli-92985a204/"
                target="_blank"
              >
                <LinkedInIcon className="contact_icons" />
              </Link>
            </div>

            <div className="col-lg-1 col-md-1 col-sm-1 col-1">
              <Link to="https://www.facebook.com/pritam.muli/" target="_blank">
                <FacebookIcon className="contact_icons" />
              </Link>
            </div>

            <div className="col-lg-1 col-md-1 col-sm-1 col-1">
              <Link
                to="https://github.com/PRITAMMULI"
                target="_blank"
              >
                <GitHubIcon className="contact_icons" />
              </Link>
            </div>
          </div>
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
