import { FILTER_VALUES } from '@/commons/constants/filterValues';
import Radio from '@/components/commons/radio/Radio';
import { useRecoilState } from 'recoil';
import { categoryTempState } from '../../../atoms';

function CategorySection() {
  const [selectedCategory, setSelectedCategory] = useRecoilState(categoryTempState);

  const handleClick = (clickItem: string) => {
    setSelectedCategory(clickItem);
  };

  return (
    <div className="flex flex-col gap-[10px] pt-[16px] pb-[26px]">
      <div className="text-sm">카테고리</div>
      <div className="flex gap-[10px] flex-wrap">
        {FILTER_VALUES.categories.map(item => {
          const isSelected = selectedCategory === item;
          return (
            <Radio
              key={item}
              className={`h-[37px] p-2 rounded-lg ${isSelected ? 'bg-red-50' : 'bg-slate-100'}`}
              isChecked={isSelected}
              onChange={() => handleClick(item)}
            >
              <div
                className={`text-gray-800 text-xs ${isSelected ? 'font-semibold' : 'font-normal'}`}
              >
                {item}
              </div>
            </Radio>
          );
        })}
      </div>
    </div>
  );
}

export default CategorySection;
