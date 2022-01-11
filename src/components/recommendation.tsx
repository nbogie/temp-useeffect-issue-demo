import "../css/recPreview.css";
import { recommendation } from "./recentrecs";
// import httpResponseProps from "../utils/httpResponseProps"

export default function Recommendation(props: recommendation): JSX.Element {
  const resource = async () => {
    const response = await fetch(`https://backend-c3c4.herokuapp.com/rec/${props.id}`);
    // const jsonBody:httpResponseProps = await response.json();
  }

  return (
    <div className="rec-preview">
    </div>
  );
}
