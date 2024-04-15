import { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { FILTER_VALUES } from '@/domains/product/constants/filterValues';
import { filterValueState, categoryTempState } from '@/domains/product/atoms';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import Radio from '@/shared/components/Radio';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

interface CategorySectionProps {
  filterFamilyId: FilterFamilyIDType;
}

const CategorySection = ({ filterFamilyId }: CategorySectionProps) => {
  const filterValue = useRecoilValue(filterValueState(filterFamilyId));
  const [selectedCategory, setSelectedCategory] = useRecoilState(categoryTempState(filterFamilyId));

  useEffect(() => {
    setSelectedCategory(filterValue.category);
  }, [filterValue, setSelectedCategory]);

  const handleClick = (clickItem: string) => {
    setSelectedCategory(clickItem);
  };

  return (
    <PaddingWrapper className="flex flex-col gap-[10px] pb-[26px]">
      <div className="text-14 font-semibold leading-150 tracking-tight-2">카테고리</div>
      <div className="flex gap-[10px] flex-wrap">
        {FILTER_VALUES.categories.map((item) => {
          const isSelected = selectedCategory === item;
          return (
            <Radio
              key={item}
              className={`h-[37px] p-[8px] rounded-[8px] ${isSelected ? 'bg-[#FDF1EE]' : 'bg-blueGray-30'}`}
              isChecked={isSelected}
              onChange={() => handleClick(item)}
            >
              <div
                className={`text-gray-900 text-14 leading-150 tracking-tight-2 ${isSelected ? 'font-semibold' : 'font-normal'}`}
              >
                {item}
              </div>
            </Radio>
          );
        })}
      </div>
    </PaddingWrapper>
  );
};

export default CategorySection;
