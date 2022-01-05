import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import StudyList from "./studylist";
import Recommended from "./recommended";
import "../css/app.css";

function WebsiteRoutes(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studylist" element={<StudyList />} />
        <Route path="/recommended" element={<Recommended />} />
      </Routes>
    </Router>
  );
}

export default WebsiteRoutes;
