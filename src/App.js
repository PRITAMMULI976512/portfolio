import logo from "./logo.svg";
import "./App.css";
import "./Component/Global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Projects from "./Component/Projects";
import Resume from "./Component/Resume";

function App() {
  return (
    <>
      <div className="appcontainer">
        <div className="container">
          <Router>
            <Routes>
              <Route exact path="/resume" element={<Resume />} />
              <Route exact path="*" element={<Home />} />
              <Route exact path="/" element={<Home />} />
              <Route exact path="/projects" element={<Projects />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
