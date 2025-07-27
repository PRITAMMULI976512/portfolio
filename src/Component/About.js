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
        <div className="col-lg-12">
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
              className="col-lg-2 col-md-3 col-sm-6 col-12 skills_tab"
              onClick={showSkills}
            >
              Skills
            </div>
            <div
              className="col-lg-2 col-md-3 col-sm-6 col-12 skills_tab"
              onClick={showExperince}
            >
              Experience
            </div>{" "}
            <div
              className="col-lg-2 col-md-3 col-sm-6 col-12 skills_tab"
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
                  System Engineer | Tata Consultancy Services (Dec-2021 -
                  present) <br />
                </h6>{" "}
                <hr />
                <hr />
                <p className="skills_description">
                  <details>
                    <summary>
                      {" "}
                      React Native Developer (May 2024 - Present)
                    </summary>

                    <ul>
                      <li>
                        Developed cross-platform mobile applications using React
                        Native, ensuring a seamless experience on both iOS and
                        Android.
                      </li>{" "}
                      <li>
                        Optimized app performance with lazy loading, code
                        splitting, and efficient state management using Redux
                        and context API.
                      </li>
                      <li>
                        Debugged and optimized mobile applications using
                        Flipper, React DevTools, and performance profiling
                        techniques.
                      </li>{" "}
                    </ul>
                  </details>{" "}
                  <hr />
                  <details>
                    <summary>React Developer (feb 2023 - Apr 2024)</summary>
                    <ul>
                      <li>
                        Developed interactive web applications using ReactJS,
                        leveraging reusable components and React Hooks for state
                        management.
                      </li>

                      <li>
                        Optimized performance with lazy loading, code splitting,
                        and memoization for efficient rendering.
                      </li>

                      <li>
                        Utilized Firebase for hosting and real-time database.
                      </li>
                      <li>
                        Increased employee event engagement by 60% through
                        real-time registration and notifications module.
                      </li>

                      <li>
                        Reduced page load time by 35% with optimized React and
                        Redux architecture. Improved data consistency across
                        sessions with persistent local storage implementation
                      </li>
                      <li>Managed code with Git/GitHub</li>
                    </ul>
                  </details>{" "}
                  <hr />
                  <details>
                    <summary>
                      Internet of Things Digital Engineering | Front-end
                      developer ( Feb 2022 - Feb 2023)
                    </summary>
                    <ul>
                      <li>
                        Built reusable UI components with Bootstrap, Tailwind
                        CSS, and media
                      </li>
                      <li>
                        Developed responsive web applications using HTML, CSS,
                        and JavaScript, ensuring cross-device compatibility.
                      </li>{" "}
                      <li>
                        Built reusable UI components with Bootstrap, Tailwind
                        CSS, and media queries for a consistent design.
                      </li>{" "}
                      <li>
                        Optimized performance with ES6+ features, improving load
                        times and accessibility.
                      </li>
                    </ul>
                  </details>{" "}
                  <hr />
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
