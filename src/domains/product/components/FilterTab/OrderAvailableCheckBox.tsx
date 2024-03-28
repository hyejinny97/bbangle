'use client';

import { useRecoilState } from 'recoil';
import { filterValueState } from '@/domains/product/atoms';
import { PageParamType } from '@/domains/product/types/filterType';
import CheckBox from '@/components/commons/checkbox/client/Checkbox';

interface OrderAvailableCheckBoxProps {
  page: PageParamType;
}

const OrderAvailableCheckBox = ({ page }: OrderAvailableCheckBoxProps) => {
  const [filterValue, setFilterValue] = useRecoilState(filterValueState(page));
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
