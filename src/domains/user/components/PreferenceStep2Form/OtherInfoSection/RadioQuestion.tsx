'use client';

import { cn } from '@/shared/utils/cn';
import { selectInputVariants } from '@/shared/style/variants';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Radio from '@/shared/components/Radio';

interface Props {
  title: string;
  subTitle: string;
  required?: boolean;
  options: {
    contents: Array<string>;
  };
}

const RadioQuestion = ({ title, subTitle, required = false, options: { contents } }: Props) => (
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
        <Radio
          key={content}
          isChecked={false}
          onChange={() => {}}
          required={required}
          className={cn(
            selectInputVariants({ outline: true, checked: false }),
            'flex min-w-max p-[8px] gap-[6px] items-center typo-title-14-regular text-gray-900'
            // disabled && 'opacity-70'/
          )}
        >
          {content}
        </Radio>
      ))}
    </PaddingWrapper>
  </div>
);

export default RadioQuestion;
