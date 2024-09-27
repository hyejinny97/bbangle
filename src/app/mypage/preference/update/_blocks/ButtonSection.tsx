import { useParams } from 'next/navigation';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ButtonNewver from '@/shared/components/ButtonNewver';
import { FORM_ID } from '@/domains/user/constants/form';

const ButtonSection = () => {
  const { progress } = useParams<{ progress: '1' | '2' }>();

  const config = {
    '1': {
      children: '다음',
      form: FORM_ID.preferenceUpdateStep1,
      disabled: false // TODO
    },
    '2': {
      children: '수정 완료',
      form: FORM_ID.preferenceUpdateStep2,
      disabled: false // TODO
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
