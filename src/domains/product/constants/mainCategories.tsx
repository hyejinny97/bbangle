import { AllIcon, BreadIcon, CookieIcon } from '../assets/category/icons';

export const MAIN_CATEGORIES_TYPE = [
  { id: 0, icon: <AllIcon />, title: '전체', hasMoreCategory: false, subCategories: [] },
  {
    id: 1,
    icon: <BreadIcon />,
    title: '빵',
    hasMoreCategory: true,
    subCategories: ['전체보기', '식빵ㆍ모닝빵', '베이글ㆍ도넛', '케이크ㆍ파이']
  },
  {
    id: 2,
    icon: <CookieIcon />,
    title: '간식/과자',
    hasMoreCategory: true,
    subCategories: [
      '전체보기',
      '쿠키ㆍ비스킷ㆍ크래커',
      '과자',
      '쨈ㆍ청',
      '아이스크림',
      '요거트',
      '기타'
    ]
  }
];
