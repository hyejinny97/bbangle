import { useRecoilState } from 'recoil';
import { FILTER_VALUES } from '@/domains/product/constants/filterValues';
import { tagsTempState } from '@/domains/product/atoms';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import CheckBox from '@/shared/components/Checkbox';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

interface TagsSectionProps {
  filterFamilyId: FilterFamilyIDType;
}

const TagsSection = ({ filterFamilyId }: TagsSectionProps) => {
  const [selectedTags, setSelectedTags] = useRecoilState(tagsTempState(filterFamilyId));
  const uniqueValue = '전체';

  const handleClick = (clickedItem: string) => {
    if (!selectedTags) {
      setSelectedTags([clickedItem]);
      return;
    }

    if (clickedItem === uniqueValue) {
      setSelectedTags([clickedItem]);
      return;
    }

    if (selectedTags.includes(clickedItem)) {
      const updatedItems = selectedTags
        .filter((item) => item !== clickedItem)
        .filter((item) => item !== uniqueValue);
      setSelectedTags(updatedItems);
      return;
    }

    const updatedItems = [...selectedTags, clickedItem].filter((item) => item !== uniqueValue);
    setSelectedTags(updatedItems);
  };

  return (
    <PaddingWrapper className="flex flex-col gap-[10px] pb-[26px]">
      <div className="text-14 font-semibold leading-150 tracking-tight-2">성분</div>
      <div className="flex gap-[10px] flex-wrap">
        {FILTER_VALUES.tags.map((tag) => {
          const isSelected = !!selectedTags?.includes(tag);
          return (
            <CheckBox
              key={tag}
              className={`h-[37px] p-[8px] rounded-[8px] ${isSelected ? 'bg-[#FDF1EE]' : 'bg-blueGray-30'}`}
              name="category"
              isChecked={isSelected}
              onChange={() => handleClick(tag)}
            >
              <span
                className={`text-gray-800 text-14 leading-150 tracking-tight-2 ${isSelected ? 'font-semibold' : 'font-normal'}`}
              >
                {tag}
              </span>
            </CheckBox>
          );
        })}
      </div>
    </PaddingWrapper>
  );
};

export default TagsSection;
