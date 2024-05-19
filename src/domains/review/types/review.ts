import { RatingType } from './starRating';

export interface Review {
  id: number;
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
