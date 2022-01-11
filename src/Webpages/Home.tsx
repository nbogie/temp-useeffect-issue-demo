import { useState, useEffect } from "react";
import SideBarMenu from "../components/sidebarmenu";
import RecommendationPreview from "../components/recommendationPreview";
import { recommendation } from "../components/recommendationPreview";
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
    <RecommendationPreview
      key={index}
      id={rec.id}
      title={rec.title}
      author={rec.author}
      type={rec.type}
      summary={rec.summary}
      link={rec.link}
      user_id={rec.user_id}
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