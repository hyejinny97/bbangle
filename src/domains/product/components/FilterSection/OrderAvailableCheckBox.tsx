'use client';

import { useRecoilState } from 'recoil';
import { filterValueState } from '@/domains/product/atoms';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import CheckBox from '@/components/commons/checkbox/client/Checkbox';

interface OrderAvailableCheckBoxProps {
  filterFamilyId: FilterFamilyIDType;
}

const OrderAvailableCheckBox = ({ filterFamilyId }: OrderAvailableCheckBoxProps) => {
  const [filterValue, setFilterValue] = useRecoilState(filterValueState(filterFamilyId));
  const isChecked = filterValue.showProductsAvailableOrder;

  const handleCheckChange = () => {
    setFilterValue({ ...filterValue, showProductsAvailableOrder: !isChecked });
  };

  return (
    <CheckBox isChecked={isChecked} onChange={handleCheckChange}>
      <p className="text-gray-800">주문 가능 상품만 보기</p>
    </CheckBox>
  );
};

export default OrderAvailableCheckBox;
