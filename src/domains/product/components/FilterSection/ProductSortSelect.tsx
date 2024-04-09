'use client';

import { useRecoilState } from 'recoil';
import { filterValueState } from '@/domains/product/atoms';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import Select from '@/components/commons/selects/Select';

interface ProductSortSelectProps {
  filterFamilyId: FilterFamilyIDType;
}

const OPTIONS = ['추천순', '인기순'];

const ProductSortSelect = ({ filterFamilyId }: ProductSortSelectProps) => {
  const [filterValue, setFilterValue] = useRecoilState(filterValueState(filterFamilyId));
  const selectedOption = filterValue.sort;

  const handleSelectChange = (newSelectedOption: string) => {
    setFilterValue({ ...filterValue, sort: newSelectedOption });
  };

  return <Select options={OPTIONS} selectedOption={selectedOption} onChange={handleSelectChange} />;
};

export default ProductSortSelect;
