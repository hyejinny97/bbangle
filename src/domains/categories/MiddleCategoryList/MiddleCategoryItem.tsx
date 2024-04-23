import { MediumForwardArrowIcon } from '../assets/icons';

interface MiddleCategoryItemProps {
  item: string;
}

const MiddleCategoryItem = ({ item }: MiddleCategoryItemProps) => (
  <div className="flex p-[16px] gap-[6px] bg-redGray-30 items-center w-full border-solid border-r-[0.5px] border-b-[0.5px] border-gray-200">
    <div className="font-medium text-gray-700 text-14 flex-grow">{item}</div>
    <div>
      <MediumForwardArrowIcon />
    </div>
  </div>
);

export default MiddleCategoryItem;
