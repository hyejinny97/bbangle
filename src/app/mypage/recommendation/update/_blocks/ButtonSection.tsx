'use client';

import { useParams } from 'next/navigation';
import { useFormContext } from 'react-hook-form';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ButtonNewver from '@/shared/components/ButtonNewver';
import { FORM_ID } from '@/domains/user/constants/form';
import {
  RecommendationStep1Type,
  RecommendationStep2Type
} from '@/domains/user/types/recommendation';

const ButtonSection = () => {
  const { progress } = useParams<{ progress: '1' | '2' }>();
  const {
    formState: { isValid: isStep1Valid }
  } = useFormContext<RecommendationStep1Type>();
  const {
    formState: { isValid: isStep2Valid }
  } = useFormContext<RecommendationStep2Type>();

  const config = {
    '1': {
      children: '다음',
      form: FORM_ID.recommendationUpdateStep1,
      disabled: !isStep1Valid
    },
    '2': {
      children: '수정 완료',
      form: FORM_ID.recommendationUpdateStep2,
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
