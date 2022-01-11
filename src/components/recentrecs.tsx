import "../css/recPreview.css";

export interface recommendation {
  id: number;
  title: string;
  author: string;
  type: string;
  summary: string;
  link: string;
  user_id: number;
}

export default function RecentRecs(props: recommendation): JSX.Element {
  return (
    <div className="rec-preview">
      <p>{props.title}</p>
      <a href={props.link}>Click Here</a>
      <p>{props.summary}</p>
      <p>uploaded by {props.author}</p>
    </div>
  );
}
