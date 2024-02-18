import { IFilterType } from '@/commons/types/filterType';
import { atom } from 'recoil';

export const isCategoryTabState = atom({
    key: 'isCategoryTabState',
    default: true
});

export const modalState = atom({
    key: 'modalState',
    default: false
});

export const isWishModalState = atom<boolean>({
    key: 'isWishModalState',
    default: false
});

export const filterValueState = atom<IFilterType>({
    key: 'filterValueState',
    default: {
        category: undefined,
        tags: undefined
    }
});

export const categoryItems = atom({
    key: 'categoryItems',
    default: ['전체', '빵', '쿠키', '케이크', '타르트', '잼/청', '요거트', '기타'] as string[]
});
export const ingredientItems = atom({
    key: 'ingredientItemss',
    default: ['전체', '글루텐프리', '고단백', '비건', '무설탕', '키토제닉'] as string[]
});
