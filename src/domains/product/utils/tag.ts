import { LIMIT_MIN_PRICE, LIMIT_MAX_PRICE } from '@/commons/constants/priceLimit';

export const getIngredientTag = (ingredients: Array<string>) => {
  if (ingredients.length === 1) return ingredients[0];
  if (ingredients.length > 1) return `${ingredients[0]} 외 ${ingredients.length - 1}개`;
};

export const getPriceTag = ({ minPrice, maxPrice }: { minPrice: number; maxPrice: number }) => {
  if (minPrice === LIMIT_MIN_PRICE && maxPrice === LIMIT_MAX_PRICE) return;
  return `${minPrice.toLocaleString()}~${maxPrice.toLocaleString()}원`;
};
