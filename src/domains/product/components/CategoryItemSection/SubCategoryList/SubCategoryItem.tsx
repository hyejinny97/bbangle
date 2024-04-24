import { MediumForwardArrowIcon } from '@public/assets/icons/categories/icons';

interface MiddleCategoryItemProps {
  categoryItem: string;
}

const SubCategoryItem = ({ categoryItem }: MiddleCategoryItemProps) => (
  <button
    type="button"
    className="flex p-[16px] gap-[6px] bg-redGray-30 items-center w-full border-solid border-r-[0.5px] border-b-[0.5px] border-gray-200 hover:bg-gray-200"
  >
    <div className="font-medium text-start text-gray-700 text-14 flex-grow">
      {categoryItem}
    </div>
    <div>
      <MediumForwardArrowIcon />
    </div>
  </button>
);

export default SubCategoryItem;
