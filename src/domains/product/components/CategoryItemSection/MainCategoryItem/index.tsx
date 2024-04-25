import ArrowIcons from '@/shared/components/icons/ArrowIcons';

interface MainCategoryItemProp {
  icon: JSX.Element;
  title: string;
  hasMoreCategory: boolean;
  onClick: () => void;
}

const MainCategoryItem = ({ icon, title, hasMoreCategory, onClick }: MainCategoryItemProp) => (
  <button
    type="button"
    aria-label={`${title}`}
    onClick={onClick}
    className="flex p-[16px] gap-[6px] items-center w-full border-solid border-b border-gray-100"
  >
    <div>{icon}</div>
    <div className="flew-grow flex-1 text-gray-900 text-start font-semibold">{title}</div>
    <div>{hasMoreCategory ? <ArrowIcons type="bottom" /> : <ArrowIcons type="forward" />}</div>
  </button>
);

export default MainCategoryItem;
