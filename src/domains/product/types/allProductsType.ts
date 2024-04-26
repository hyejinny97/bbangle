import { IProductType } from './productType';

export interface IAllProductsType {
  content: IProductType[];
  requestCursor: number;
  hasNext: boolean;
  boardCount: number;
  storeCount: number;
}
