import { ReactNode } from 'react';
import { atom } from 'recoil';

export const isCategoryTabState = atom({
  key: 'isCategoryTabState',
  default: true
});

export const isCategoryTabStateNew = atom({
  key: 'isCategoryTabStateNew',
  default: true
});

export const modalState = atom<ReactNode>({
  key: 'modalState',
  default: null
});

export const popupState = atom<ReactNode>({
  key: 'popupState',
  default: null
});

export const isWishModalState = atom<boolean>({
  key: 'isWishModalState',
  default: false
});
