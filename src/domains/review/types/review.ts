import { RatingType } from './starRating';

export interface Review {
  id: string;
  images: string[];
  nickname: string;
  isBest: boolean;
  tags: string[];
  like: number;
  isLiked: boolean;
  comment: string;
  date: string;
  rating: RatingType;
}
