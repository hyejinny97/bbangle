import { atomFamily } from 'recoil';
import {
  ICategoryType,
  ITagsType,
  IPriceType,
  IFilterType,
  PageParamType
} from '@/domains/product/types/filterType';
import { LIMIT_MIN_PRICE, LIMIT_MAX_PRICE } from '@/commons/constants/priceLimit';

export const categoryTempState = atomFamily<ICategoryType, PageParamType>({
  key: 'category',
  default: undefined
});

export const tagsTempState = atomFamily<ITagsType, PageParamType>({
  key: 'ingredient',
  default: undefined
});

export const priceTempState = atomFamily<IPriceType, PageParamType>({
  key: 'price',
  default: {
    minPrice: LIMIT_MIN_PRICE,
    maxPrice: LIMIT_MAX_PRICE
  }
});

export const filterValueState = atomFamily<IFilterType, PageParamType>({
  key: 'filterValueState',
  default: {
    category: undefined,
    tags: undefined,
    price: { minPrice: LIMIT_MIN_PRICE, maxPrice: LIMIT_MAX_PRICE },
    sort: '추천순',
    showProductsAvailableOrder: false
  }
});
