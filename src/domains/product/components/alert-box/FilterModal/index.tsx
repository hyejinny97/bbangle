'use client';

import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import UpModalNewVer from '@/components/commons/modal/UpModalNewVer';
import TagsSection from '@/domains/product/components/alert-box/FilterModal/TagsSection';
import PriceSection from '@/domains/product/components/alert-box/FilterModal/PriceSection';
import CategorySection from '@/domains/product/components/alert-box/FilterModal/CategorySection';
import ButtonSection from '@/domains/product/components/alert-box/FilterModal/ButtonSection';

interface FilterModalProps {
  filterFamilyId: FilterFamilyIDType;
}

function FilterModal({ filterFamilyId }: FilterModalProps) {
  return (
    <UpModalNewVer title="필터">
      <CategorySection filterFamilyId={filterFamilyId} />
      <hr className="bg-gray-100" />
      <TagsSection filterFamilyId={filterFamilyId} />
      <hr className="bg-gray-100" />
      <PriceSection filterFamilyId={filterFamilyId} />
      <ButtonSection filterFamilyId={filterFamilyId} />
    </UpModalNewVer>
  );
}

export default FilterModal;
