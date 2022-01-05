import { useState, useEffect } from 'react';
import SideBarMenu from "../components/sidebarmenu";
import Recommendation from "../components/recommendation";
import { recommendation } from '../components/recommendation';
import "../css/app.css";

function Home(): JSX.Element {
  const [displayRecs, setDisplayRecs] = useState<recommendation[]>([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const response = await fetch(
        "http://backend-c3c4.herokuapp.com/recentrecs"
      );
      const jsonBody = await response.json();
      setDisplayRecs(jsonBody.data);
    };

    fetchEpisodes();
  }, []);

  const recentrecs = displayRecs.map((rec, index) => (
    <Recommendation key={index} id={rec.id} title={rec.title} author={rec.author} type={rec.type} summary={rec.summary} link={rec.link}/>
  ))

  return (
    <div className='body-grid'>
      <SideBarMenu />
      <div className='content'>
        <h1>C3C4 Recommendations</h1>
        {recentrecs}
      </div>
    </div>
  );
}

export default Home;
