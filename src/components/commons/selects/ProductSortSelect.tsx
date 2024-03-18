'use client';

import { useRecoilState } from 'recoil';
import { filterValueState } from '@/components/units/(main)/Products/atoms';
import Select from '@/components/commons/selects/Select';

const OPTIONS = ['추천순', '인기순'];

const ProductSortSelect = () => {
  const [filterValue, setFilterValue] = useRecoilState(filterValueState);
  const selectedOption = filterValue.sort;

  const handleSelectChange = (newSelectedOption: string) => {
    setFilterValue({ ...filterValue, sort: newSelectedOption });
  };

  return <Select options={OPTIONS} selectedOption={selectedOption} onChange={handleSelectChange} />;
};

export default ProductSortSelect;
