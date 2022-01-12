import { useCallback, useEffect, useState } from "react";
import { RecProps } from "../utils/RecProps";

interface CurrentRecProps {
  currentRec: number;
}

export default function Recommendation({
  currentRec,
}: CurrentRecProps): JSX.Element {
  console.log('Recommendation component is rendering.  currentRec: ', currentRec)


  const [rec, setRec] = useState<RecProps>({
    recInfo: [],
    comments: [],
    tags: [],
  });


  const fetchRec = async () => {
    if (currentRec !== 0) {
      console.log('Fetching rec with id: ', currentRec);
      const response = await fetch(
        `https://backend-c3c4.herokuapp.com/rec/${currentRec}`
      );
      const jsonBody = await response.json();
      setRec(jsonBody.data);
    }
  };

  useEffect(() => {
    fetchRec();

  }, []);
  return (
    <div>
      {rec.recInfo.length === 0 ? (
        <p>No Recommendation selected</p>
      ) : (
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
        </div>
      )}
    </div>
  );
}
