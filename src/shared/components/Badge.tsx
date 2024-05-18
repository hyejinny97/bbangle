import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  type: 'default' | 'bundle' | 'ranking' | 'best';
  children?: ReactNode;
}

const CLASS = {
  default: 'border-gray-200 text-gray-700 bg-transparent px-[6px] py-[2px]',
  bundle: 'text-white border-secondaryOrangeRed bg-secondaryOrangeRed px-[6px] py-[2px]',
  best: 'text-white border-primaryOrangeRed bg-primaryOrangeRed px-[6px] py-[2px]',
  ranking: 'text-gray-900 border-gray-100 bg-white size-[20px]'
};

const Badge = ({ type, children }: Props) => (
  <div
    className={twMerge(
      'inline-block typo-body-11-regular border text-center rounded-[4px]',
      CLASS[type]
    )}
  >
    {children}
  </div>
);

export default Badge;
