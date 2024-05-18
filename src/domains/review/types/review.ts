export interface Review {
  id: number;
  images: string[];
  nickname: string;
  score: number;
  isBest: boolean;
  tags: string[];
  like: number;
  comment: string;
  date: string;
}
