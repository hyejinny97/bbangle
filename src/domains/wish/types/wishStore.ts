import { IStoreType } from '@/domains/store/types/store';

export interface WishStoreList {
  content: IStoreType[];
  lastPage: number;
  nextPage: number;
}
