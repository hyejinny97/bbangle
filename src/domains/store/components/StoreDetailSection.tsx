import { ReactNode } from 'react';

import PaddingWrapper from '@/shared/components/PaddingWrapper';

interface StoreDetailSectionProps {
  className?: string;
  title: string;
  children: ReactNode;
}
const StoreDetailSection = ({ className, title, children }: StoreDetailSectionProps) => (
  <PaddingWrapper className={className}>
    <div className="text-gray-800 text-14 mb-[10px] font-semibold">{title}</div>
    {children}
  </PaddingWrapper>
);

export default StoreDetailSection;
