// import CreateNewRec from './createnewrec';
import "../css/sidebar.css";
import TypeFetch from "../utils/TypeFetch";
import NewModal from "./NewModal";
import { useState, useEffect } from "react";
import separateCapitalise from "../utils/separateCapitalise";

export default function SideBarMenu(): JSX.Element {
  const [recTypes, setRecTypes] = useState<string[]>([]);

  const members = ["Jenna Ram", "Hanna Sophian", "Truman Tong"].map(
    (element, index) => (
      <option value={element} key={index}>
        {element}
      </option>
    )
  );

  useEffect(() => {
    TypeFetch().then((result) => {
      if (result) {
        setRecTypes(result);
      }
    });
  }, []);
  const types = recTypes.map((element: string, index: number) => (
    <a className="sidebarbutton" id="inner" href="/" key={index}>
      <span className="span">{separateCapitalise(element)}</span>
    </a>
  ));

  return (
    <div className="menubar">
      <div id="wrapper">
        <a className="logo" id="inner" href="/">
          <span className="span">The Social Academy</span>
        </a>
        <br id="inner" />
        <select className="login-dropdown" name="login" id="inner">
          <option value="" disabled selected>
            Choose name to log in
          </option>
          {members}
        </select>
        <br id="inner" />
        <br id="inner" />
        {/* <a className="sidebarbutton" id="inner" href="/recommended">
          <span className="span">+ Create New Recommendation</span>
        </a> */}
        <NewModal />
        <br id="inner" />
        <br id="inner" />
        <br id="inner" />
        <a className="sidebarbutton" id="inner" href="/studylist">
          <span className="span">My Study List</span>
        </a>
        <br id="inner" />
        <br id="inner" />
        <br id="inner" />
        {/* <a className="sidebarbutton" id="inner" href="/">
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
        </a> */}
        {types}
      </div>
    </div>
  );
}
