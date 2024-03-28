import { useRecoilState } from 'recoil';
import {
  categoryTempState,
  filterValueState,
  tagsTempState,
  priceTempState
} from '@/domains/product/atoms';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import useModal from '@/commons/hooks/useModal';
import Button from '@/components/commons/button/client/Button';
import PaddingWrapper from '@/components/commons/PaddingWrapper';

interface ButtonSectionProps {
  filterFamilyId: FilterFamilyIDType;
}

const ButtonSection = ({ filterFamilyId }: ButtonSectionProps) => {
  const [filterValue, setFilterValue] = useRecoilState(filterValueState(filterFamilyId));
  const [selectedCategory, setSelectedCategory] = useRecoilState(categoryTempState(filterFamilyId));
  const [selectedTags, setSelectedTags] = useRecoilState(tagsTempState(filterFamilyId));
  const [price, setPrice] = useRecoilState(priceTempState(filterFamilyId));
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

  return (
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
  );
};

export default ButtonSection;
