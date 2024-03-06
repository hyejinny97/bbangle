'use client';

import { useRecoilState } from 'recoil';
import { isCategoryTabStateNew } from '@/atoms/atom';
import TabContainer from '@/components/commons/tabs/TabContainer';

const TAB_NAMES = ['상품별', '성분별'];
const CATEGORY_IDX = 0;
const INGREDIENT_IDX = 1;

const CategoryAndIngredientTab = () => {
  const [isCategoryTab, setIsCategoryTab] = useRecoilState(isCategoryTabStateNew);
  const activeTabIdx = isCategoryTab ? CATEGORY_IDX : INGREDIENT_IDX;

  const handleTabChange = (activeTabIdx: number) => {
    setIsCategoryTab(activeTabIdx === CATEGORY_IDX);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return <TabContainer names={TAB_NAMES} activeTabIdx={activeTabIdx} onChange={handleTabChange} />;
};

export default CategoryAndIngredientTab;
