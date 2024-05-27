import { ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';

import PaddingWrapper from '@/shared/components/PaddingWrapper';

interface DetailSectionWrapperProps {
  title: string;
  className?: string;
  children: ReactNode;
}

const DetailSectionWrapper = ({ title, className, children }: DetailSectionWrapperProps) => (
  <>
    <PaddingWrapper className="typo-title-14-semibold px-[16px] border-gray-100 text-gray-800">
      {title}
    </PaddingWrapper>
    <PaddingWrapper className={twMerge(className)}>{children}</PaddingWrapper>
  </>
);

export default DetailSectionWrapper;
