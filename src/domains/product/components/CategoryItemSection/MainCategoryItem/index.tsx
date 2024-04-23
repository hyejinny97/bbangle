import { ForwardkArrowIcon } from '@/shared/components/icons';
import { BottomArrowICon } from '@public/assets/icons/categories/icons';

interface LargeCategoryItemProp {
  item: {
    icon: JSX.Element;
    title: string;
    hasMoreCategory: boolean;
  };
  onClick: () => void;
}

const MainCategoryItem = ({ item, onClick }: LargeCategoryItemProp) => (
  <button
    type="button"
    aria-label="button"
    onClick={onClick}
    className="flex p-[16px] gap-[6px] items-center w-full border-solid border-b border-gray-100"
  >
    <div className="">{item.icon}</div>
    <div className="flew-grow flex-1 text-gray-900 text-start font-semibold">
      {item.title}
    </div>
    <div>
      {item.hasMoreCategory ? <BottomArrowICon /> : <ForwardkArrowIcon />}
    </div>
  </button>
);

export default MainCategoryItem;
