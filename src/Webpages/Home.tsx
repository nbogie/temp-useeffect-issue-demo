import { useState, useEffect } from "react";
import SideBarMenu from "../components/sidebarmenu";
import RecentRecs from "../components/recentrecs";
import { recommendation } from "../components/recentrecs";
import "../css/app.css";

function Home(): JSX.Element {
  const [displayRecs, setDisplayRecs] = useState<recommendation[]>([]);

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

  const recentrecs = displayRecs.map((rec, index) => (
    <RecentRecs
      key={index}
      id={rec.id}
      title={rec.title}
      author={rec.author}
      type={rec.type}
      summary={rec.summary}
      link={rec.link}
    />
  ));

  return (
    <div className="body-grid">
      <SideBarMenu />
      <div className="content">
        <h1>C3C4 Recommendations</h1>
        {recentrecs}
      </div>
    </div>
  );
}

export default Home;
