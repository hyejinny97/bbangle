'use client';

import { useRecoilState } from 'recoil';
import { filterValueState } from '@/domains/product/atoms';
import { PageParamType } from '@/domains/product/types/filterType';
import Select from '@/components/commons/selects/Select';

interface ProductSortSelectProps {
  page: PageParamType;
}

const OPTIONS = ['추천순', '인기순'];

const ProductSortSelect = ({ page }: ProductSortSelectProps) => {
  const [filterValue, setFilterValue] = useRecoilState(filterValueState(page));
  const selectedOption = filterValue.sort;

  const handleSelectChange = (newSelectedOption: string) => {
    setFilterValue({ ...filterValue, sort: newSelectedOption });
  };

  return <Select options={OPTIONS} selectedOption={selectedOption} onChange={handleSelectChange} />;
};

export default ProductSortSelect;
