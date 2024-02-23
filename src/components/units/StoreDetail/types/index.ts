import { IProductType } from '@/commons/types/productType';
import { IStoreType } from '@/commons/types/storeType';

export interface IStoreDetailType {
  store: IStoreType;
  bestProducts: IProductType[];
  allProducts: IProductType[];
}
