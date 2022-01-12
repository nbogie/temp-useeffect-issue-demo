import { useState } from "react";
import Recommendation from "../components/recommendation";
import SideBarMenu from "../components/sidebarmenu";
import "../css/app.css";

interface RecommendedProps {
  currentUser: number;
  setCurrentUser: React.Dispatch<React.SetStateAction<number>>;
  currentRec: number;
  setCurrentRec: React.Dispatch<React.SetStateAction<number>>;
}

function Recommended(props: RecommendedProps): JSX.Element {
  //https://backend-c3c4.herokuapp.com/recentrecs
  const [recId, setRecId] = useState(1);


  return (
    <div className="body-grid">
      <SideBarMenu
        currentUser={props.currentUser}
        setCurrentUser={props.setCurrentUser}
      />
      <div className='controls'>
        <button onClick={() => setRecId(0)}>0</button>
        <button onClick={() => setRecId(1)}>1</button>
        <button onClick={() => setRecId(2)}>3</button>

      </div>
      <Recommendation currentRec={recId} />
    </div >
  );
}

export default Recommended;
