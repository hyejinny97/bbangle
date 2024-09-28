'use client';

import useUpdatePreferenceMutation from '@/domains/user/queries/useUpdatePreferenceMutation';
import { PreferenceStep1Type } from '@/domains/user/types/preference';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { FORM_ID } from '@/domains/user/constants/form';
import PreferenceStep1Form from '@/domains/user/components/PreferenceStep1Form';
import PreferenceStep2Form from '@/domains/user/components/PreferenceStep2Form';

interface Props {
  progress: 1 | 2;
}

const PreferenceUpdateForm = ({ progress }: Props) => {
  const { handleSubmit } = useFormContext<PreferenceStep1Type>();
  const { mutate } = useUpdatePreferenceMutation();

  const onStep1Valid: SubmitHandler<PreferenceStep1Type> = ({ preferenceType }) => {
    const preferences = preferenceType.filter((value) => typeof value === 'string');
    mutate(preferences);
  };

  // TODO
  const onStep2Valid = () => {};

  return (
    <>
      {progress === 1 && (
        <PreferenceStep1Form
          id={FORM_ID.preferenceUpdateStep1}
          onSubmit={handleSubmit(onStep1Valid)}
        />
      )}
      {progress === 2 && (
        <PreferenceStep2Form
          id={FORM_ID.preferenceUpdateStep2}
          onSubmit={handleSubmit(onStep2Valid)}
        />
      )}
    </>
  );
};

export default PreferenceUpdateForm;
