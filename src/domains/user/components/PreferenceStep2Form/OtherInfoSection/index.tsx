import { useFormContext } from 'react-hook-form';
import { PreferenceStep2Type } from '@/domains/user/types/preference';
import { PREFERENCE } from '@/domains/user/constants/preference';
import RadioQuestion from './RadioQuestion';

const OtherInfoSection = () => {
  const { watch, register } = useFormContext<PreferenceStep2Type>();
  const isVegetarians = watch('isVegetarians');

  return (
    <section className="mb-[8px]">
      <h3 className="w-full px-[16px] py-[10px] bg-gray-100 typo-title-14-semibold text-gray-700">
        기타 정보
      </h3>
      <RadioQuestion
        title="채식 지향이신가요?"
        subTitle="채식인 경우에 1개만 선택해주세요."
        options={PREFERENCE.step2.isVegetarians.map((option) => ({
          value: option,
          checked: isVegetarians.includes(option),
          ...register('isVegetarians')
        }))}
      />
    </section>
  );
};

export default OtherInfoSection;
