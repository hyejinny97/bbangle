'use client';

import { useRecoilState } from 'recoil';
import { filterValueState } from '@/components/units/(main)/Products/atoms';
import CheckBox from '@/components/commons/checkbox/client/Checkbox';

const OrderAvailableCheckBox = () => {
  const [filterValue, setFilterValue] = useRecoilState(filterValueState);
  const isChecked = filterValue.showProductsAvailableOrder;

  const handleCheckChange = () => {
    setFilterValue({ ...filterValue, showProductsAvailableOrder: !isChecked });
  };

  return (
    <CheckBox isChecked={isChecked} onChange={handleCheckChange}>
      주문가능한 상품 보기
    </CheckBox>
  );
};

export default OrderAvailableCheckBox;
