import SideBarMenu from "../components/sidebarmenu";
import "../css/app.css";

function StudyList(): JSX.Element {
  return (
    <div className="body-grid">
      <SideBarMenu />
      <div>
        <h1>StudyList</h1>
      </div>
    </div>
  );
}

export default StudyList;
