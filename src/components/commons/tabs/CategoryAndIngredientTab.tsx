'use client';

import { useSetRecoilState } from 'recoil';
import { isCategoryTabStateNew } from '@/atoms/atom';
import TabContainer from '@/components/commons/tabs/TabContainer';

const TAB_NAMES = ['상품별', '성분별'];

const CategoryAndIngredientTab = () => {
  const setIsCategoryTab = useSetRecoilState(isCategoryTabStateNew);

  const handleTabChange = (activeTabIdx: number) => {
    setIsCategoryTab(TAB_NAMES[activeTabIdx] === TAB_NAMES[0]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return <TabContainer names={TAB_NAMES} onChange={handleTabChange} />;
};

export default CategoryAndIngredientTab;
