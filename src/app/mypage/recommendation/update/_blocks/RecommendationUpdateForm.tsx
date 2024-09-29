'use client';

import useUpdatePreferenceMutation from '@/domains/user/queries/useUpdateRecommendationMutation';
import {
  RecommendationStep1Type,
  RecommendationStep2Type
} from '@/domains/user/types/recommendation';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { FORM_ID } from '@/domains/user/constants/form';
import RecommendationStep1Form from '@/domains/user/components/RecommendationStep1Form';
import RecommendationStep2Form from '@/domains/user/components/RecommendationStep2Form';

interface Props {
  progress: 1 | 2;
}

const RecommendationUpdateForm = ({ progress }: Props) => {
  const { handleSubmit: handleStep1Submit } = useFormContext<RecommendationStep1Type>();
  const { handleSubmit: handleStep2Submit } = useFormContext<RecommendationStep2Type>();
  const { mutateStep1, mutateStep2 } = useUpdatePreferenceMutation();

  const onStep1Valid: SubmitHandler<RecommendationStep1Type> = (recommendationStep1) => {
    mutateStep1(recommendationStep1);
  };

  const onStep2Valid: SubmitHandler<RecommendationStep2Type> = (recommendationStep2) => {
    mutateStep2(recommendationStep2);
  };

  return (
    <>
      {progress === 1 && (
        <RecommendationStep1Form
          id={FORM_ID.recommendationUpdateStep1}
          onSubmit={handleStep1Submit(onStep1Valid)}
        />
      )}
      {progress === 2 && (
        <RecommendationStep2Form
          id={FORM_ID.recommendationUpdateStep2}
          onSubmit={handleStep2Submit(onStep2Valid)}
        />
      )}
    </>
  );
};

export default RecommendationUpdateForm;
