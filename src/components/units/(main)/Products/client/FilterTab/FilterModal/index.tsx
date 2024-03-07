'use client';

import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import Button from '@/components/commons/button/client/Button';
import UpModalNewVer from '@/components/commons/modal/UpModalNewVer';
import useModal from '@/commons/hooks/useModal';
import CategorySection from './CategorySection';
import { categoryTempState, filterValueState, tagsTempState } from '../../../atoms';
import TagsSection from './TagsSection';

function FilterModal() {
  const [filterValue, setFilterValue] = useRecoilState(filterValueState);
  const [selectedCategory, setSelectedCategory] = useRecoilState(categoryTempState);
  const [selectedTags, setSelectedTags] = useRecoilState(tagsTempState);
  const { closeModal } = useModal();

  const handleConfirm = () => {
    setFilterValue(prev => ({
      category: selectedCategory ? selectedCategory : prev.category,
      tags: selectedTags ? selectedTags : prev.tags,
      sort: prev.sort
    }));
    closeModal();
  };

  const handleCancel = () => {
    setSelectedCategory(filterValue.category);
    setSelectedTags(filterValue.tags);
    closeModal();
  };

  useEffect(() => {
    setSelectedCategory(filterValue.category);
    setSelectedTags(filterValue.tags);
  }, [filterValue, setSelectedCategory, setSelectedTags]);

  return (
    <UpModalNewVer title="필터">
      <div className="px-[16px]">
        <CategorySection />
        <hr />
        <TagsSection />
        <div className="flex gap-[10px] justify-center items-center">
          <Button variants="primary-white" onClick={handleCancel}>
            취소
          </Button>
          <Button variants="primary-black" onClick={handleConfirm}>
            확인
          </Button>
        </div>
      </div>
    </UpModalNewVer>
  );
}

export default FilterModal;
