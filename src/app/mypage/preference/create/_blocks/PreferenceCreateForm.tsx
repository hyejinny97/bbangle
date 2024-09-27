import useAddPreferenceMutation from '@/domains/user/queries/useAddPreferenceMutation';
import { PreferenceFormType } from '@/domains/user/types/preference';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { FORM_ID } from '@/domains/user/constants/form';
import PreferenceStep1Form from '@/domains/user/components/PreferenceStep1Form';
import PreferenceStep2Form from '@/domains/user/components/PreferenceStep2Form';

interface Props {
  progress: 1 | 2;
}

const PreferenceCreateForm = ({ progress }: Props) => {
  const { handleSubmit } = useFormContext<PreferenceFormType>();
  const { mutate } = useAddPreferenceMutation();

  const onStep1Valid: SubmitHandler<PreferenceFormType> = ({ preferenceType }) => {
    const preferences = preferenceType.filter((value) => typeof value === 'string');
    mutate(preferences);
  };

  // TODO
  const onStep2Valid = () => {};

  return (
    <>
      {progress === 1 && (
        <PreferenceStep1Form
          id={FORM_ID.preferenceCreateStep1}
          onSubmit={handleSubmit(onStep1Valid)}
        />
      )}
      {progress === 2 && (
        <PreferenceStep2Form
          id={FORM_ID.preferenceCreateStep2}
          onSubmit={handleSubmit(onStep2Valid)}
        />
      )}
    </>
  );
};

export default PreferenceCreateForm;
