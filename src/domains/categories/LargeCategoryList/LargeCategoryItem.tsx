import { ForwardkArrowIcon } from '@/shared/components/icons';

import { BottomArrowICon } from '../assets/icons';

interface LargeCategoryItemProp {
  item: {
    icon: JSX.Element;
    title: string;
    hasMoreCategory: boolean;
  };
}

const LargeCategoryItem = ({ item }: LargeCategoryItemProp) => (
  <div className="flex p-[16px] gap-[6px] items-center w-full border-solid border-b border-gray-100">
    <div className="">{item.icon}</div>
    <div className="flew-grow flex-1 text-gray-900 font-semibold">{item.title}</div>
    <div>{item.hasMoreCategory ? <BottomArrowICon /> : <ForwardkArrowIcon />}</div>
  </div>
);

export default LargeCategoryItem;
