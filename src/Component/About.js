import React, { useState } from "react";
import photo from "./images/about_photo.webp";
import Skills from "./Skills";
function About() {
  const [skills, setSkills] = useState(false);
  const [experience, setExperience] = useState(false);
  const [education, setEducation] = useState(false);
  const showSkills = () => {
    setSkills(true);
    setEducation(false);
    setExperience(false);
  };

  const showEducation = () => {
    setEducation(true);
    setSkills(false);
    setExperience(false);
  };

  const showExperince = () => {
    setExperience(true);
    setEducation(false);
    setSkills(false);
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4">
          <img src={photo} className="profile_photo" alt="" />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-8">
          <h1 className="about">About</h1>
          <h6 className="description">
            With over 3 years of experience working in Tata Consultancy
            Services, I am a skilled front-end developer proficient in HTML,
            CSS, ReactJS, JavaScript, React Native, and Redux. I have a strong
            understanding of version control systems like GitHub and project
            management tools like JIRA. My expertise lies in creating responsive
            and interactive user interfaces that enhance the overall user
            experience.
          </h6>

          <div className="row mt-4">
            <div
              className="col-lg-2 col-md-3 col-sm-4 col-4 skills_tab"
              onClick={showSkills}
            >
              Skills
            </div>
            <div
              className="col-lg-2 col-md-3 col-sm-4 col-4 skills_tab"
              onClick={showExperince}
            >
              Experience
            </div>{" "}
            <div
              className="col-lg-2 col-md-3 col-sm-4 col-4 skills_tab"
              onClick={showEducation}
            >
              Education
            </div>
            {skills == true ? (
              <div className="skills_section">
                <h6 className="skills_heading mt-3">UI/UX</h6>
                <p className="skills_description">
                  Designing Responsive web Pages
                </p>

                <h6 className="skills_heading">web devlopement</h6>
                <p className="skills_description">
                  Designing Responsive web Sites
                </p>

                <h6 className="skills_heading">Web App Developement</h6>
                <p className="skills_description">
                  Designing Responsive and Reusable react Component
                </p>
              </div>
            ) : null}
            {experience == true ? (
              <div className="experience_section">
                <h6 className="skills_heading mt-3">
                  Assistant System Engineer | Tata Consultancy Services                  (Dec-2021 - present) <br />
                </h6> <hr /><hr />
                <p className="skills_description">

                  <details>
                    <summary>
                      {" "}
                      MERN Stack Developer (Dec 2023 - Present)
                    </summary>

                    <ul>
                      <li>
                        Proficient in MERN Stack, including MongoDB and SQL
                        databases.{" "}
                      </li>{" "}
                      <li>
                        Skilled API implementation using JavaScript and adept at
                        utilizing CSS frameworks for design consistency.
                      </li>
                      <li>
                        Extensive experience in version control with GitHub and
                        creating reusable components in ReactJS.{" "}
                      </li>{" "}
                      <li>Uses AWS for deployment purpose.</li>
                    </ul>
                  </details> <hr />
                  <details>
                    <summary>
                      Internet of Things Digital Engineering | Front-end
                      developer - ReactJS (Dec 2021 - Dec 2023)
                    </summary>
                    <ul>
                      <li>
                        Developed user-friendly interfaces for a banking web
                        application using React and JavaScript.
                      </li>
                      <li>
                        Integrated APIs and optimized UI/UX for enhanced
                        performance.
                      </li>{" "}
                      <li>
                        Collaborated with teams to deliver improvements on time.
                      </li>{" "}
                      <li>
                        Proficient in using firebase for deploying and managing
                        CRUD application.
                      </li>
                    </ul>
                  </details>
                </p>
              </div>
            ) : null}
            {education == true ? (
              <div className="education_section">
                <h6 className="skills_heading mt-3">B-Tech Graduate</h6>
                <p className="skills_description">
                  Electronics and Telecommunication Engineering | 7.1 <br />{" "}
                  Shri Guru gobind Singh Ji Instiute of Engineering and
                  Technology <br /> Nanded, 431606
                </p>
                <h6 className="skills_heading mt-3">HSC</h6>
                <p className="skills_description">
                  Science | 71.85 <br /> Kulbhushan Jr. college <br />{" "}
                  Aurangabad, 431001
                  <h6 className="skills_heading mt-3">SSC</h6>
                  <p className="skills_description">
                    Saraswati Bhuvan Prashala | 90.20 <br /> Aurangabad, 431001
                  </p>
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <Skills />
    </>
  );
}

export default About;
