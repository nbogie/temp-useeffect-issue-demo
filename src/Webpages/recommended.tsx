import SideBarMenu from "../components/sidebarmenu";
import "../css/app.css";

function Recommended(): JSX.Element {
  return (
    <div className='body-grid'>
      <SideBarMenu />
      <div>
        <h1>Recommended</h1>
      </div>
    </div>
  );
}

export default Recommended;
