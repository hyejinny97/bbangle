import { IProductType } from '@/commons/types/productType';

export interface IAllProductsType {
  content: IProductType[];
  itemCount: number;
  pageNumber: number;
  pageSize: number;
  existNextPage: boolean;
}
