import { atom } from 'recoil';

export type SortOption = '담은순' | '인기순' | '저가순';

export const wishProductsSortOptionState = atom<SortOption>({
  key: 'productsSortOption',
  default: '담은순'
});
