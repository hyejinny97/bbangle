import { ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';

interface InfoWrapperProps {
  title?: string;
  className?: string;
  children: ReactNode;
}

const InfoWrapper = ({ title, className, children }: InfoWrapperProps) => (
  <div>
    {title && (
      <h2 className="text-gray-500 text-12 leading-150 font-semibold pb-[10px]">{title}</h2>
    )}
    <div className={twMerge('p-[0px]', className)}> {children}</div>
  </div>
);

export default InfoWrapper;
