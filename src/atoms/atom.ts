import { atom } from 'recoil';

export const isCategoryTabState = atom({
    key: 'isCategoryTabState',
    default: true
});

export const modalState = atom({
    key: 'modalState',
    default: false
});
