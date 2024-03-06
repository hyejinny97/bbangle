'use client';

import { useRecoilState } from 'recoil';
import { filterValueState } from '@/atoms/atom';
import { useEffect, useState } from 'react';
import SingleCheckBox from './ModalSection/SingleCheckBox';
import MultipleCheckBox from './ModalSection/MultipleCheckBox';
import { FILTER_VALUES } from '@/commons/constants/filterValues';
import Button from '@/components/commons/button/client/Button';
import UpModalNewVer from '@/components/commons/modal/UpModalNewVer';
import useModal from '@/commons/hooks/useModal';

function FilterModal() {
  const [filterValue, setFilterValue] = useRecoilState(filterValueState);
  const [selectedCategory, setSelectedCategory] = useState(filterValue.category);
  const [selectedTags, setSelectedTags] = useState(filterValue.tags);
  const { closeModal } = useModal();

  const handleConfirm = () => {
    setFilterValue(prev => ({
      category: selectedCategory ? selectedCategory : prev.category,
      tags: selectedTags ? selectedTags : prev.tags
    }));
  };

  const handleCancel = () => {
    setSelectedCategory(filterValue.category);
    setSelectedTags(filterValue.tags);
    closeModal();
  };

  useEffect(() => {
    setSelectedCategory(filterValue.category);
    setSelectedTags(filterValue.tags);
  }, [filterValue]);

  return (
    <UpModalNewVer title="필터">
      <SingleCheckBox
        selectedItem={selectedCategory}
        setSelectedItem={setSelectedCategory}
        title="카테고리"
        values={FILTER_VALUES.categories}
      />
      <MultipleCheckBox
        uniqueValue="전체"
        selectedItems={selectedTags}
        setSelectedItems={setSelectedTags}
        title="성분"
        values={FILTER_VALUES.tags}
      />

      <div className="w-[92%] h-[84px] m-auto flex gap-[10px] justify-center items-center">
        <Button variants="primary-white" onClick={handleCancel}>
          취소
        </Button>
        <Button variants="primary-black" onClick={handleConfirm}>
          확인
        </Button>
      </div>
    </UpModalNewVer>
  );
}

export default FilterModal;
