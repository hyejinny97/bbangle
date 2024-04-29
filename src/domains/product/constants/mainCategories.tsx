import { AllIcon, BreadIcon, CookieIcon } from '../assets/category/icons';

export const MAIN_CATEGORIES_TYPE = [
  { categoryId: 0, icon: <AllIcon />, title: '전체', hasMoreCategory: false },
  { categoryId: 1, icon: <BreadIcon />, title: '빵', hasMoreCategory: true },
  {
    categoryId: 2,
    icon: <CookieIcon />,
    title: '간식/과자',
    hasMoreCategory: true
  }
];
