import { atom } from 'recoil';
import { ICategoryType, IFilterType, ITagsType } from '../types';

export const categoryTempState = atom<ICategoryType>({
  key: 'category',
  default: undefined
});

export const tagsTempState = atom<ITagsType>({
  key: 'ingredient',
  default: undefined
});

export const filterValueState = atom<IFilterType>({
  key: 'filterValueState',
  default: {
    category: undefined,
    tags: undefined,
    sort: '추천순',
    showProductsAvailableOrder: false
  }
});
