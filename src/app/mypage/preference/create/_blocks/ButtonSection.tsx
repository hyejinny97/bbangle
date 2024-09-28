'use client';

import { useParams } from 'next/navigation';
import { useFormContext } from 'react-hook-form';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ButtonNewver from '@/shared/components/ButtonNewver';
import { FORM_ID } from '@/domains/user/constants/form';
import { PreferenceStep1Type, PreferenceStep2Type } from '@/domains/user/types/preference';

const ButtonSection = () => {
  const { progress } = useParams<{ progress: '1' | '2' }>();
  const {
    formState: { isValid: isStep1Valid }
  } = useFormContext<PreferenceStep1Type>();
  const {
    formState: { isValid: isStep2Valid }
  } = useFormContext<PreferenceStep2Type>();

  const config = {
    '1': {
      children: '다음',
      form: FORM_ID.preferenceCreateStep1,
      disabled: !isStep1Valid
    },
    '2': {
      children: '완료',
      form: FORM_ID.preferenceCreateStep2,
      disabled: !isStep2Valid
    }
  };

  return (
    <PaddingWrapper>
      <ButtonNewver
        type="submit"
        size="lg"
        color="black"
        className="w-full"
        {...config[progress]}
      />
    </PaddingWrapper>
  );
};

export default ButtonSection;
