import { IStoreType } from './storeType';

export interface IAllStoreType {
  content: IStoreType[];
  itemCount: number;
  pageNumber: number;
  pageSize: number;
}
