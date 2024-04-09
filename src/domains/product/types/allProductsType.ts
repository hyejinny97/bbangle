import { IProductType } from '@/commons/types/productType';

export interface IAllProductsType {
  content: IProductType[];
  requestCursor: number | null;
  hasNext: boolean;
  boardCnt: number;
  storeCnt: number;
}
