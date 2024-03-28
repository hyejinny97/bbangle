'use client';

import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import {
  categoryTempState,
  filterValueState,
  tagsTempState,
  priceTempState
} from '@/domains/product/atoms';
import { PageParamType } from '@/domains/product/types/filterType';
import useModal from '@/commons/hooks/useModal';
import Button from '@/components/commons/button/client/Button';
import TagsSection from '@/domains/product/components/FilterTab/FilterModal/TagsSection';
import PriceSection from '@/domains/product/components/FilterTab/FilterModal/PriceSection';
import CategorySection from '@/domains/product/components/FilterTab/FilterModal/CategorySection';
import UpModalNewVer from '@/components/commons/modal/UpModalNewVer';
import PaddingWrapper from '@/components/commons/PaddingWrapper';

interface FilterModalProps {
  page: PageParamType;
}

function FilterModal({ page }: FilterModalProps) {
  const [filterValue, setFilterValue] = useRecoilState(filterValueState(page));
  const [selectedCategory, setSelectedCategory] = useRecoilState(categoryTempState(page));
  const [selectedTags, setSelectedTags] = useRecoilState(tagsTempState(page));
  const [price, setPrice] = useRecoilState(priceTempState(page));
  const { closeModal } = useModal();

  const handleConfirm = () => {
    setFilterValue(prev => ({
      ...filterValue,
      category: selectedCategory ? selectedCategory : prev.category,
      tags: selectedTags ? selectedTags : prev.tags,
      price
    }));
    closeModal();
  };

  const handleCancel = () => {
    setSelectedCategory(filterValue.category);
    setSelectedTags(filterValue.tags);
    setPrice(filterValue.price);
    closeModal();
  };

  useEffect(() => {
    setSelectedCategory(filterValue.category);
    setSelectedTags(filterValue.tags);
  }, [filterValue, setSelectedCategory, setSelectedTags]);

  return (
    <UpModalNewVer title="필터">
      <CategorySection page={page} />
      <hr className="bg-gray-100" />
      <TagsSection page={page} />
      <hr className="bg-gray-100" />
      <PriceSection page={page} />
      <PaddingWrapper className="flex gap-[10px] justify-center items-center">
        <Button
          variants="primary-white"
          className="font-medium text-16 leading-150 tracking-tight-2"
          onClick={handleCancel}
        >
          취소
        </Button>
        <Button
          variants="primary-black"
          className="font-medium text-16 leading-150 tracking-tight-2 text-white"
          onClick={handleConfirm}
        >
          확인
        </Button>
      </PaddingWrapper>
    </UpModalNewVer>
  );
}

export default FilterModal;
