'use client';

import useUpdatePreferenceMutation from '@/domains/user/queries/useUpdateRecommendationMutation';
import { RecommendationStep1Type } from '@/domains/user/types/recommendation';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { FORM_ID } from '@/domains/user/constants/form';
import RecommendationStep1Form from '@/domains/user/components/RecommendationStep1Form';
import RecommendationStep2Form from '@/domains/user/components/RecommendationStep2Form';

interface Props {
  progress: 1 | 2;
}

const RecommendationUpdateForm = ({ progress }: Props) => {
  const { handleSubmit } = useFormContext<RecommendationStep1Type>();
  const { mutate } = useUpdatePreferenceMutation();

  const onStep1Valid: SubmitHandler<RecommendationStep1Type> = (recommendationStep1) => {
    mutate(recommendationStep1);
  };

  // TODO
  const onStep2Valid = () => {};

  return (
    <>
      {progress === 1 && (
        <RecommendationStep1Form
          id={FORM_ID.recommendationUpdateStep1}
          onSubmit={handleSubmit(onStep1Valid)}
        />
      )}
      {progress === 2 && (
        <RecommendationStep2Form
          id={FORM_ID.recommendationUpdateStep2}
          onSubmit={handleSubmit(onStep2Valid)}
        />
      )}
    </>
  );
};

export default RecommendationUpdateForm;
