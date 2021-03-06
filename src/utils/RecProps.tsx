interface recInfoProps {
  title: string;
  link: string;
  type: string;
  author: string;
  status: string;
  reason: string;
  summary: string;
  user_id: number;
  rec_id: number;
  name: string;
  submit_time: string;
  likes: number;
  dislikes: number;
}

interface commentProps {
  user_id: number;
  rec_id: number;
  comment: string;
  submit_time: string;
}

interface tagProps {
  user_id: number;
  rec_id: number;
  tag: string[];
}

export interface RecProps {
  recInfo: recInfoProps[];
  comments: commentProps[];
  tags: tagProps[];
}
