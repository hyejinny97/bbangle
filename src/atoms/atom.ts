import { atom } from 'recoil';

export const categoryName = '상품별';

export const productNameState = atom({
    key: 'productNameState',
    default: '상품별'
});
