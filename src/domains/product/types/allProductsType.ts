import { IProductType } from './productType';

export interface IAllProductsType {
  success: boolean;
  code: number;
  message: string;
  result: {
    content: IProductType[];
    requestCursor: number;
    hasNext: boolean;
    boardCount: number;
    storeCount: number;
  };
}
