import SideBarMenu from "../components/sidebarmenu";
import "../css/app.css";

interface StudyListProps {
  currentUser: number;
  setCurrentUser: React.Dispatch<React.SetStateAction<number>>;
}

function StudyList(props: StudyListProps): JSX.Element {
  return (
    <div className="body-grid">
      <SideBarMenu
        currentUser={props.currentUser}
        setCurrentUser={props.setCurrentUser}
      />
      <div>
        <h1>StudyList</h1>
      </div>
    </div>
  );
}

export default StudyList;
