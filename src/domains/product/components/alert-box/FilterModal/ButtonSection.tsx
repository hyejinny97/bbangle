import { useRecoilState } from 'recoil';
import { filterValueState, filterValueTempState } from '@/domains/product/atoms';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import useModal from '@/shared/hooks/useModal';
import Button from '@/components/commons/button/client/Button';
import PaddingWrapper from '@/components/commons/PaddingWrapper';

interface ButtonSectionProps {
  filterFamilyId: FilterFamilyIDType;
}

const ButtonSection = ({ filterFamilyId }: ButtonSectionProps) => {
  const [filterValue, setFilterValue] = useRecoilState(filterValueState(filterFamilyId));
  const [tempFilterValue, setTempFilterValue] = useRecoilState(
    filterValueTempState(filterFamilyId)
  );
  const { closeModal } = useModal();

  const handleConfirm = () => {
    setFilterValue(tempFilterValue);
    closeModal();
  };

  const handleCancel = () => {
    setTempFilterValue(filterValue);
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
