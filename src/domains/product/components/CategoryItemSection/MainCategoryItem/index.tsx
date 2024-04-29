import { ForwardkArrowIcon } from '@/shared/components/icons';
import { BottomArrowICon } from '@public/assets/icons/categories/icons';

interface MainCategoryItemProp {
  mainCategory: {
    icon: JSX.Element;
    title: string;
    hasMoreCategory: boolean;
  };
  onClick: () => void;
}

const MainCategoryItem = ({ mainCategory, onClick }: MainCategoryItemProp) => (
  <button
    type="button"
    aria-label={`${mainCategory.title}`}
    onClick={onClick}
    className="flex p-[16px] gap-[6px] items-center w-full border-solid border-b border-gray-100"
  >
    <div>{mainCategory.icon}</div>
    <div className="flew-grow flex-1 text-gray-900 text-start font-semibold">
      {mainCategory.title}
    </div>
    <div>
      {mainCategory.hasMoreCategory ? (
        <BottomArrowICon />
      ) : (
        <ForwardkArrowIcon />
      )}
    </div>
  </button>
);

export default MainCategoryItem;
