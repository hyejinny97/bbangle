'use client';

import { useRecoilState } from 'recoil';
import { filterValueState } from '@/domains/product/atoms';
import { PageParamType } from '@/domains/product/types/filterType';
import { FILTER_VALUES } from '@/commons/constants/filterValues';
import { TAG_CATEGORY, TAG_INGREDIENT, TAG_PRICE } from '@/domains/product/constants/tagType';
import { getIngredientTag, getPriceTag } from '@/domains/product/utils/tag';
import useModal from '@/commons/hooks/useModal';
import FilterIcon from '@/domains/product/assets/filter.svg';
import ProductSortSelect from '@/components/commons/selects/ProductSortSelect';
import FilterModal from '@/domains/product/components/FilterTab/FilterModal';
import OrderAvailableCheckBox from '@/domains/product/components/FilterTab/OrderAvailableCheckBox';
import PaddingWrapper from '@/components/commons/PaddingWrapper';

interface FilterTabProps {
  page: PageParamType;
}

const FilterTab = ({ page }: FilterTabProps) => {
  const [filterValue, setFilterValue] = useRecoilState(filterValueState(page));
  const { openModal } = useModal();

  const categoryTags = FILTER_VALUES.categories.map(item => ({
    type: TAG_CATEGORY,
    content: item
  }));
  const ingredientTag = filterValue.tags && getIngredientTag(filterValue.tags);
  const priceTag = getPriceTag(filterValue.price);
  const filterTagList = [ingredientTag, priceTag, ...categoryTags];

  const handleFilterClick = (newCategory: string) => {
    setFilterValue(prev => ({
      ...prev,
      category: newCategory
    }));
  };

  const openFilterModal = () => {
    openModal(<FilterModal page={page} />);
  };

  return (
    <PaddingWrapper className="flex flex-col gap-[16px] pb-[12px] border-b-[1px] border-solid border-gray-100">
      <div className="flex justify-between items-center gap-[6px]">
        <div className="flex gap-[6px] overflow-x-scroll scrollbar-hide">
          {filterTagList.map((item, index) => {
            if (!item) return;

            const isCategoryTagActive = filterValue.category === item.content;
            const isNewTag = item.type === TAG_INGREDIENT || item.type === TAG_PRICE; // ingredientTag, priceTag

            return (
              <button
                key={index}
                className={`px-[12px] py-[8px] min-w-max rounded-[50px] bg-white border text-12 leading-150 tracking-tight-2
                ${
                  isCategoryTagActive || isNewTag
                    ? 'border-primaryOrangeRed text-primaryOrangeRed font-bold'
                    : 'border-gray-200 text-gray-900 font-medium'
                }`}
                onClick={() => handleFilterClick(item.content)}
                disabled={isNewTag}
              >
                {item.content}
              </button>
            );
          })}
        </div>
        <button onClick={openFilterModal}>
          <FilterIcon />
        </button>
      </div>
      <div className="flex justify-between items-center">
        <OrderAvailableCheckBox page={page} />
        <ProductSortSelect page={page} />
      </div>
    </PaddingWrapper>
  );
};

export default FilterTab;
