'use client';

import { useId } from 'react';
import { cn } from '@/shared/utils/cn';
import { selectInputVariants } from '@/shared/style/variants';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import CheckboxNewver from '@/shared/components/CheckboxNewver';

interface Props {
  title: string;
  subTitle: string;
  required?: boolean;
  options: {
    contents: Array<string>;
  };
}

const CheckboxQuestion = ({ title, subTitle, required = false, options: { contents } }: Props) => {
  const id = useId();

  return (
    <div>
      <PaddingWrapper className="pb-[10px]">
        <h4 className="typo-title-16-semibold text-gray-900">
          {title}
          {required && <span className="text-primaryOrangeRed">*</span>}
        </h4>
        <p className="typo-title-14-regular text-gray-700">{subTitle}</p>
      </PaddingWrapper>
      <PaddingWrapper className="pt-0 flex flex-wrap gap-[10px]">
        {contents.map((content) => (
          <label
            key={content}
            htmlFor={id}
            className={cn(
              selectInputVariants({ outline: true, checked: false }),
              'flex min-w-max p-[8px] gap-[6px] items-center typo-title-14-regular text-gray-900'
              // disabled && 'opacity-70'/
            )}
          >
            <CheckboxNewver id={id} checked={false} required={required} />
            {content}
          </label>
        ))}
      </PaddingWrapper>
    </div>
  );
};

export default CheckboxQuestion;
