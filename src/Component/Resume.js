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
          <div className="col-lg-4 col-md-4 col-sm-4 col-4 resume_profile_photo_component">
            <img src={photo} alt="" className="resume_profile_photo" />
          </div>
          {/* <div className="col-lg-1"></div> */}
          <div className="col-lg-8 col-md-8 col-sm-8 col-8">
            <h1 className="profile_name">PRITAM MULI</h1>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
              <a href="tel: +91 9765129019" title="Contact us" className="maillink"> <CallIcon className="contact_icons" />+91 9765129019</a>
              </div>
              <div className="col-lg-6  col-md-6 col-sm-12">
                <EditLocationIcon className="contact_icons" /> Garakheda parisar
                Sambhaji nagar
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <AttachEmailIcon className="contact_icons" />{" "}
                <a href="mailto:muli.pritam@gmail.com" className="maillink" title="Contact tjrough mail">muli.pritam@gmail.com </a>   
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
              With over 2.5 years of experience working in Tata Consultancy
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
              Assistant System Engineer | Tata Consultancy Services | Dec-2021 -
              present
            </h5>
            {/* <p className="profile_summary">
            Internet of Things Digital Engineering | Front-end developer - ReactJS
            </p>   */}

            <span className="profile_summary">
              Internet of Things Digital Engineering | Front-end developer -
              ReactJS
              <ul>
                <li>
                  Developed and maintained user interface for web applications,
                  ensuring optimal performance and responsiveness.
                </li>
                <li>
                  Collaborated with backend developers and designers to
                  implement visual elements and user interactions.
                </li>
                <li>
                  Utilized React.js to create reusable components, enhancing
                  code maintainability and scalability.
                </li>
                <li>
                  Implemented responsive design principle to ensure a seamless
                  user experience across various devices
                </li>
                <li>
                  Collaborated with UI/UX designers to implement design
                  specifications and enhance user experience.
                </li>
                <li>
                  Integrated third party APIs to extend application
                  functionality and improve overall performance.{" "}
                </li>
                <li>
                  Participated in agile development processes, including sprint
                  planning and daily stand-up meetings
                </li>
                <li>
                  Resolve cross-browser compatibility issue and optimized web
                  applications for speed and performance.
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
            <p className="profile_summary">Responsive Design, Performance optimization, UI/Ux design Principle</p>
          </div>
        </div>

        
        <div className="row mb-3">
          {" "}
          <div className="col-lg-5 col-md-5 col-sm-5 col-5 profile_intro">
            <h1>Certification</h1>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">

            <h5>Complete SQL Programming</h5>
            <p className="profile_summary">Udemy (12/2023 - 01/2024)</p>

            <h5>JavaScript bootcamp</h5>
            <p className="profile_summary">Udemy (06/2023 - 07/2024)</p>
          </div>
        </div>
      </div>      
    </>
  );
}

export default Resume;
