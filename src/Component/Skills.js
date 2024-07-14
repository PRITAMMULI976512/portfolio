import React from "react";
import js from "./images/js.jpeg";
import react from "./images/react_logo.jpeg";
import git from "./images/git.jpeg";
import JIRA from "./images/Jira.jpeg";
import docker from "./images/docker.jpeg";
import { useNavigate } from "react-router";
function Skills() {
  return (
    <>
      <h1 className="skills mt-5">My Skills</h1>

      <div className="row pb-3">
        <div className="col-lg-4 col-md-6 col-sm-6 col-12 w-full mt-3">
          <div class="card skills_card">
            <img src={js} class="card-img-top skills_image" alt="..." />
            <div class="card-body">
              <h5 class="card-title skills_card_title">Java Script</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 col-12 w-full mt-3">
          <div class="card skills_card" >
            <img src={react} class="card-img-top skills_image" alt="..." />
            <div class="card-body">
              <h5 class="card-title skills_card_title">React</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 col-12 w-full mt-3">
          <div class="card skills_card" >
            <img src={git} class="card-img-top skills_image" alt="..." />
            <div class="card-body">
              <h5 class="card-title skills_card_title">Git</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 col-12 w-full mt-3">
          <div class="card skills_card" >
            <img src={docker} class="card-img-top skills_image" alt="..." />
            <div class="card-body">
              <h5 class="card-title skills_card_title">Docker</h5>
            </div>
          </div>
        </div>{" "}
        <div className="col-lg-4 col-md-6 col-sm-6 col-12 w-full mt-3">
          <div class="card skills_card" >
            <img src={JIRA} class="card-img-top skills_image" alt="..." />
            <div class="card-body">
              <h5 class="card-title skills_card_title">JIRA</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
