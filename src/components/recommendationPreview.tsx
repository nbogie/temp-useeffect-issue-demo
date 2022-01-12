import { Link } from "react-router-dom";
import "../css/recPreview.css";

export interface recSummaryProps {
  id: number;
  title: string;
  author: string;
  type: string;
  summary: string;
  link: string;
  user_id: number;
  name: string;
  setCurrentRec: React.Dispatch<React.SetStateAction<number>>;
}

export default function RecentRecs(props: recSummaryProps): JSX.Element {
  return (
    <div className="rec-preview">
      <Link
        to="/recommended"
        onClick={() => {
          props.setCurrentRec(props.id);
        }}
      >
        {props.title}
      </Link>
      <br />
      <a href={props.link}>Click Here</a>
      <p>{props.summary}</p>
      <p>uploaded by {props.author}</p>
    </div>
  );
}
