import { atom } from 'recoil';

export const isCategoryTabState = atom({
    key: 'isCategoryTabState',
    default: true
});

export const modalState = atom({
    key: 'modalState',
    default: false
});

export const filterValueState = atom<{ [key: string]: string | string[] | null }>({
    key: 'filterValueState',
    default: {}
});
