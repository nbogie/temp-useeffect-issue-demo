import SideBarMenu from "../components/sidebarmenu";
import "../css/app.css";

interface RecommendedProps {
  currentUser: number;
  setCurrentUser: React.Dispatch<React.SetStateAction<number>>;
}

function Recommended(props: RecommendedProps): JSX.Element {
  return (
    <div className="body-grid">
      <SideBarMenu
        currentUser={props.currentUser}
        setCurrentUser={props.setCurrentUser}
      />

      <div>
        <h1>Recommended</h1>
      </div>
    </div>
  );
}

export default Recommended;
