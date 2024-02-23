'use client';

import { isCategoryTabState } from '@/atoms/atom';
import { useRecoilState } from 'recoil';
import ProductsTab from '../ProductsTab';
import StoresTab from '../StoresTab';
import FilterTab from '../FilterTab';

const ItemList = () => {
  const [isCategoryTab] = useRecoilState(isCategoryTabState);

  return (
    <>
      <div className="flex flex-wrap m-auto">
        {isCategoryTab ? (
          <>
            <FilterTab />
            <ProductsTab />
          </>
        ) : (
          <StoresTab />
        )}
      </div>
    </>
  );
};

export default ItemList;
