import { PAGE_MAIN, PAGE_SEARCH } from '@/domains/product/constants/pageParam';

export type ICategoryType = string | undefined;
export type ITagsType = string[] | undefined;
export type IPriceType = {
  minPrice: number;
  maxPrice: number;
};
export type ISortType = string;
export type IShowProductsAvailableOrder = boolean;

export interface IFilterType {
  category?: ICategoryType;
  tags?: ITagsType;
  price: IPriceType;
  sort: ISortType;
  showProductsAvailableOrder: IShowProductsAvailableOrder;
}

export type PageParamType = typeof PAGE_MAIN | typeof PAGE_SEARCH;
