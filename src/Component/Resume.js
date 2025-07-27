import React from "react";
import NAvbsr from "./NAvbsr";
import photo from "./images/photo.webp";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import CallIcon from "@mui/icons-material/Call";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";

function Resume() {
  return (
    <>
      <NAvbsr />
      <div className="resume_intro">
        <div className="row">
          {/* <div className="col-lg-4 col-md-4 col-sm-4 col-4 resume_profile_photo_component">
            <img src={photo} alt="" className="resume_profile_photo" />
          </div> */}
          <div className="col-lg-12 col-md-8 col-sm-8 col-8">
            <h1 className="profile_name text-center">PRITAM MULI</h1>
            <div className="row">
              <div className="col-lg-4  text-center col-md-6 col-sm-12 col-12">
                <a
                  href="tel: +91 9765129019"
                  title="Contact us"
                  className="maillink"
                >
                  {" "}
                  <CallIcon className="contact_icons" />
                  +91 9765129019
                </a>
              </div>
              <div className="col-lg-4 text-center col-md-6 col-sm-12 col-12">
                <EditLocationIcon className="contact_icons" /> Garakheda parisar
                Sambhaji nagar
              </div>
              <div className="col-lg-4 text-center col-md-6 col-sm-12 col-12">
                <AttachEmailIcon className="contact_icons" />{" "}
                <a
                  href="mailto:mulipritam1@gmail.com"
                  className="maillink"
                  title="Contact through mail"
                >
                  mulipritam1@gmail.com
                </a>
              </div>
            </div>
          </div>{" "}
        </div>

        <div className="intro_finish"></div>

        <div className="row mb-3">
          <div className="col-lg-5 col-md-5 col-sm-5 col-5 profile_intro">
            <h1>Profile Summary</h1>
          </div>

          <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <p className="profile_summary">
              With over 3 years of experience working in Tata Consultancy
              Services, I am a skilled front-end developer proficient in HTML,
              CSS, ReactJS, JavaScript, React Native, and Redux. I have a strong
              understanding of version control systems like GitHub and project
              management tools like JIRA. My expertise lies in creating
              responsive and interactive user interfaces that enhance the
              overall user experience.{" "}
            </p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-5 col-md-5 col-sm-5 col-5 profile_intro">
            <h1>Work Experience</h1>
          </div>

          <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <h5>
              System Engineer | Tata Consultancy Services | Dec-2021 - present
            </h5>
            <span className="profile_summary">
              React Native developer (Apr 2024 - Present)
              <ul>
                <li>
                  Developed cross-platform mobile applications using React
                  Native, ensuring a seamless experience on both iOS and
                  Android.
                </li>{" "}
                <li>
                  Optimized app performance with lazy loading, code splitting,
                  and efficient state management using Redux and context API.
                </li>
                <li>
                  Debugged and optimized mobile applications using Flipper,
                  React DevTools, and performance profiling techniques.
                </li>{" "}
              </ul>
            </span>{" "}
            <span className="profile_summary">
              react developer (feb 2023 - Apr 2024)
              <summary>React Developer (feb 2023 - Apr 2024)</summary>
              <ul>
                <li>
                  Developed interactive web applications using ReactJS,
                  leveraging reusable components and React Hooks for state
                  management.
                </li>

                <li>
                  Optimized performance with lazy loading, code splitting, and
                  memoization for efficient rendering.
                </li>

                <li>Utilized Firebase for hosting and real-time database.</li>
                <li>
                  Increased employee event engagement by 60% through real-time
                  registration and notifications module.
                </li>

                <li>
                  Reduced page load time by 35% with optimized React and Redux
                  architecture. Improved data consistency across sessions with
                  persistent local storage implementation
                </li>
                <li>Managed code with Git/GitHub</li>
              </ul>
            </span>
            <span className="profile_summary">
              Front-end developer (feb 2022 - feb 2023)
              <ul>
                <li>
                  Built reusable UI components with Bootstrap, Tailwind CSS, and
                  media queries
                </li>
                <li>
                  Developed responsive web applications using HTML, CSS, and
                  JavaScript, ensuring cross-device compatibility.
                </li>
                <li>
                  Built reusable UI components with Bootstrap, Tailwind CSS, and
                  media queries for a consistent design.
                </li>
                <li>
                  Optimized performance with ES6+ features, improving load times
                  and accessibility.
                </li>
              </ul>
            </span>
          </div>
        </div>

        <div className="row mb-3">
          {" "}
          <div className="col-lg-5 col-md-5 col-sm-5 col-5 profile_intro">
            <h1>Education</h1>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <h5>B-Tech - Electronics and Telecommunication</h5>
            <p className="profile_summary">
              Jun-2017 - Jul 2021 <br />
              Shri Guru gobind singh ji Instiute of Engineering and Technology
              <br /> Nanded, 431606{" "}
            </p>

            <h5>HSC</h5>
            <p className="profile_summary">
              Mar-2016 - feb 2017 <br />
              Kulbhushan Jr. college
              <br /> Aurangabad, 431001{" "}
            </p>

            <h5>Saraswati Bhuvan Prashala</h5>
            <p className="profile_summary">
              Mar-2014 - feb 2015 <br />
              Kulbhushan Jr. college
              <br /> Aurangabad, 431001{" "}
            </p>
          </div>
        </div>

        <div className="row mb-3">
          {" "}
          <div className="col-lg-5 col-md-5 col-sm-5 col-5 profile_intro">
            <h1>Technical Skills</h1>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <h5>Languages</h5>
            <p className="profile_summary">HTML, CSS, JavaScript(ES6+)</p>

            <h5>Frameworks</h5>
            <p className="profile_summary">React, Bootstrap, Tailwind CSS</p>

            <h5>Tools</h5>
            <p className="profile_summary">Git, Jira, Docker</p>

            <h5>Database</h5>
            <p className="profile_summary">Mongodb, Firebse, Sql</p>

            <h5>Others Skills</h5>
            <p className="profile_summary">
              Responsive Design, Performance optimization, UI/Ux design
              Principle
            </p>
          </div>
        </div>

        <div className="row mb-3">
          {" "}
          <div className="col-lg-5 col-md-5 col-sm-5 col-5 profile_intro">
            <h1>Certification</h1>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <h5>Build Strong MERN Stack Foundation</h5>
            <p className="profile_summary">Simpli learn (03/2025)</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
