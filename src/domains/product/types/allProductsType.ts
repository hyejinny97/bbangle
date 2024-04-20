import { IProductType } from '@/domains/product/types/productType';

export interface IAllProductsType {
  content: IProductType[];
  requestCursor: number | null;
  hasNext: boolean;
  boardCnt: number;
  storeCnt: number;
}
