import { IProductType } from '@/domains/product/types/productType';

export interface WishFolderType {
  folderId: number;
  title: string;
  count: number;
  productImages: string[];
}

/**
 * @deprecated
 */
export interface WishProductsDetail {
  content: IProductType[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}
