'use client';

import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import Modal from '@/shared/components/Modal';
import TagsSection from '@/domains/product/components/alert-box/FilterModal/TagsSection';
import PriceSection from '@/domains/product/components/alert-box/FilterModal/PriceSection';
import CategorySection from '@/domains/product/components/alert-box/FilterModal/CategorySection';
import ButtonSection from '@/domains/product/components/alert-box/FilterModal/ButtonSection';

interface FilterModalProps {
  filterFamilyId: FilterFamilyIDType;
}

const FilterModal = ({ filterFamilyId }: FilterModalProps) => (
    <Modal title="필터">
      <CategorySection filterFamilyId={filterFamilyId} />
      <hr className="bg-gray-100" />
      <TagsSection filterFamilyId={filterFamilyId} />
      <hr className="bg-gray-100" />
      <PriceSection filterFamilyId={filterFamilyId} />
      <ButtonSection filterFamilyId={filterFamilyId} />
    </Modal>
  )

export default FilterModal;
