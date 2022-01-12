import "../css/recPreview.css";
import { useEffect, useState } from "react";
import { RecProps } from "../utils/RecProps";

export default function Recommendation(): JSX.Element {
  const [rec, setRec] = useState<RecProps>({
    recInfo: [],
    comments: [],
    tags: [],
  });

  const fetchRec = async (id: number) => {
    const response = await fetch(
      `https://backend-c3c4.herokuapp.com/rec/${id}`
    );
    const jsonBody = await response.json();
    setRec(jsonBody.data);
  };

  useEffect(() => {
    fetchRec(1);
  }, []);

  return (
    <div>
      {rec.recInfo.length !== 0 && (
        <div>
          <h1>{rec.recInfo[0].title}</h1>
          <h3>By: {rec.recInfo[0].author}</h3>
          <h4>
            Submitted by: {rec.recInfo[0].name} on {rec.recInfo[0].submit_time}
          </h4>
          <p>
            {rec.recInfo[0].status}: {rec.recInfo[0].reason}
          </p>
          <p>Summary: {rec.recInfo[0].summary}</p>
          <h5>Comments:</h5>
          <p>{rec.comments[0].comment}</p>
          <p>{rec.comments[0].submit_time}</p>
          <p>{rec.tags[0].tag}</p>
        </div>
      )}
    </div>
  );
}
