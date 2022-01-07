import "../css/recPreview.css";

export interface recommendation {
  id: number;
  title: string;
  author: string;
  type: string;
  summary: string;
  link: string;
}

export default function Recommendation(props: recommendation): JSX.Element {
  return (
    <div className="rec-preview">
      <p>{props.title}</p>
      <p>{props.summary}</p>
      <p>uploaded by {props.author}</p>
    </div>
  );
}
