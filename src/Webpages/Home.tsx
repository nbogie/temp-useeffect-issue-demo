import { useState, useEffect } from "react";
import SideBarMenu from "../components/sidebarmenu";
import RecentRecs from "../components/recommendationPreview";
import { recSummaryProps } from "../components/recommendationPreview";
import "../css/app.css";
import Recommendation from "../components/recommendation";

interface HomeProps {
  currentUser: number;
  setCurrentUser: React.Dispatch<React.SetStateAction<number>>;
  currentRec: number;
  setCurrentRec: React.Dispatch<React.SetStateAction<number>>;
}

function Home(props: HomeProps): JSX.Element {
  const [displayRecs, setDisplayRecs] = useState<recSummaryProps[]>([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const response = await fetch(
        "https://backend-c3c4.herokuapp.com/recentrecs"
      );
      const jsonBody = await response.json();
      setDisplayRecs(jsonBody.data);
    };

    fetchEpisodes();
  }, []);

  //https://backend-c3c4.herokuapp.com/recentrecs
  const [recId, setRecId] = useState(1);




  return (
    <div>
      <h3>Click a recommendation id to see that recommendation</h3>
      {
        displayRecs.map((rec, index) => <button
          key={rec.id}
          onClick={(e) => setRecId(rec.id)}>{rec.id}</button>)
      }

      <Recommendation currentRec={recId} />

    </div>
  );
}

export default Home;
