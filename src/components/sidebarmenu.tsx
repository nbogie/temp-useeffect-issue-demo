// import CreateNewRec from './createnewrec';
import "../css/sidebar.css";
import NewModal from "./NewModal";

export default function SideBarMenu(): JSX.Element {
  const members = ["Jenna Ram", "Hanna Sophian", "Truman Tong"].map(
    (element, index) => (
      <option value={element} key={index}>
        {element}
      </option>
    )
  );

  return (
    <div className="menubar">
      <div id="wrapper">
        <a className="logo" id="inner" href="/">
          <span className="span">The Social Academy</span>
        </a>
        <br id="inner" />
        <select className="dropdownmenu" name="login" id="inner">
          <option value="" disabled selected>
            Choose name to log in
          </option>
          {members}
        </select>
        <br id="inner" />
        <br id="inner" />
        <a className="sidebarbutton" id="inner" href="/recommended">
          <span className="span">+ Create New Recommendation</span>
        </a>
        <NewModal />
        <br id="inner" />
        <br id="inner" />
        <br id="inner" />
        <a className="sidebarbutton" id="inner" href="/">
          <span className="span">Podcast</span>
        </a>
        <a className="sidebarbutton" id="inner" href="/">
          <span className="span">Articles</span>
        </a>
        <a className="sidebarbutton" id="inner" href="/">
          <span className="span">Exercises</span>
        </a>
        <a className="sidebarbutton" id="inner" href="/">
          <span className="span">Videos</span>
        </a>
        <br id="inner" />
        <br id="inner" />
        <br id="inner" />
        <a className="sidebarbutton" id="inner" href="/studylist">
          <span className="span">My Study List</span>
        </a>
      </div>
    </div>
  );
}
