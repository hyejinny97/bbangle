import { atomFamily } from 'recoil';
import {
  ICategoryType,
  ITagsType,
  IPriceType,
  IFilterType,
  FilterFamilyIDType
} from '@/domains/product/types/filterType';
import { LIMIT_MIN_PRICE, LIMIT_MAX_PRICE } from '@/commons/constants/priceLimit';

export const categoryTempState = atomFamily<ICategoryType, FilterFamilyIDType>({
  key: 'category',
  default: undefined
});

export const tagsTempState = atomFamily<ITagsType, FilterFamilyIDType>({
  key: 'ingredient',
  default: undefined
});

export const priceTempState = atomFamily<IPriceType, FilterFamilyIDType>({
  key: 'price',
  default: {
    minPrice: LIMIT_MIN_PRICE,
    maxPrice: LIMIT_MAX_PRICE
  }
});

export const filterValueState = atomFamily<IFilterType, FilterFamilyIDType>({
  key: 'filterValueState',
  default: {
    category: undefined,
    tags: undefined,
    price: { minPrice: LIMIT_MIN_PRICE, maxPrice: LIMIT_MAX_PRICE },
    sort: '추천순',
    showProductsAvailableOrder: false
  }
});
