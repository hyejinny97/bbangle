'use client';

import { useRecoilState } from 'recoil';
import { isCategoryTabStateNew } from '@/atoms/atom';
import TabButton from '@/shared/components/TabButton';

const CategoryAndIngredientTab = () => {
  const [isCategoryTab, setIsCategoryTab] = useRecoilState(isCategoryTabStateNew);

  const handleTabClick = (isCategoryTabClicked: boolean) => {
    setIsCategoryTab(isCategoryTabClicked);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex">
      <TabButton active={isCategoryTab} onClick={() => handleTabClick(true)}>
        상품별
      </TabButton>
      <TabButton active={!isCategoryTab} onClick={() => handleTabClick(false)}>
        성분별
      </TabButton>
    </div>
  );
};

export default CategoryAndIngredientTab;
