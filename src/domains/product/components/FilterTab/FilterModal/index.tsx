'use client';

import { PageParamType } from '@/domains/product/types/filterType';
import UpModalNewVer from '@/components/commons/modal/UpModalNewVer';
import TagsSection from '@/domains/product/components/FilterTab/FilterModal/TagsSection';
import PriceSection from '@/domains/product/components/FilterTab/FilterModal/PriceSection';
import CategorySection from '@/domains/product/components/FilterTab/FilterModal/CategorySection';
import ButtonSection from '@/domains/product/components/FilterTab/FilterModal/ButtonSection';

interface FilterModalProps {
  page: PageParamType;
}

function FilterModal({ page }: FilterModalProps) {
  return (
    <UpModalNewVer title="필터">
      <CategorySection page={page} />
      <hr className="bg-gray-100" />
      <TagsSection page={page} />
      <hr className="bg-gray-100" />
      <PriceSection page={page} />
      <ButtonSection page={page} />
    </UpModalNewVer>
  );
}

export default FilterModal;
