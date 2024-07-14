import React from "react";
import NAvbsr from "./NAvbsr";
import ecommerse from "./images/e-commersse.png";
import family from "./images/family.png";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  return (
    <>
      <NAvbsr />
      <div className="row">
        <div className="col-lg-6">
          <h1 className="mt-3">E-commerse Web App</h1>
          <Link to="https://muli-e-commerse.web.app/" target="_blank">
            <img src={ecommerse} className="ecommerse_image" alt="" />{" "}
          </Link>
        </div>

        <div className="col-lg-6">
          <h1 className="mt-3">Family Hotel Web App</h1>
          <Link to="https://familyhotel-85e24.web.app/" target="_blank">
          <img
            src={family}
            className="ecommerse_image"
            onClick={() => {
              navigate("https://familyhotel-85e24.web.app/");
            }}
            alt=""
          />          </Link>

        </div>
      </div>
    </>
  );
}

export default Projects;
