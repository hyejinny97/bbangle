import { WishStore } from '@/domains/store/types/store';

export interface WishStoreList {
  content: WishStore[];
  lastPage: number;
  nextPage: number;
}
