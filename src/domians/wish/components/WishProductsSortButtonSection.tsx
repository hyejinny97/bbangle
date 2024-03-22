'use client';

import PaddingWrapper from '@/components/commons/PaddingWrapper';
import Select from '@/components/commons/selects/Select';
import { useRecoilState } from 'recoil';
import { wishProductsSortOptionState } from '../atoms/wishProducts';
import isSortOptionType from '../utils/typeGuard';
import { SORT_OPTIONS } from '../constants';

const WishProductsSortButtonSection = () => {
  const [selectedOption, setSelectedOption] = useRecoilState(wishProductsSortOptionState);

  const onChange = (selectedOption: string) => {
    if (isSortOptionType(selectedOption)) {
      setSelectedOption(selectedOption);
    }
  };

  return (
    <PaddingWrapper>
      <Select options={SORT_OPTIONS} selectedOption={selectedOption} onChange={onChange} />
    </PaddingWrapper>
  );
};

export default WishProductsSortButtonSection;
