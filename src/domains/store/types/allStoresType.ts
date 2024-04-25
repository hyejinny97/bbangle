import { IStoreType } from '@/domains/store/types/store';

export interface IAllStoresType {
  success: boolean;
  code: number;
  message: string;
  result: {
    content: IStoreType[];
    requestCursor: number;
    hasNext: boolean;
  };
}
