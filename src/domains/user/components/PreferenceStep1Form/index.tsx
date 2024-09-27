import { DetailedHTMLProps, FormHTMLAttributes } from 'react';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import DescriptionSection from './DescriptionSection';
import CheckSection from './CheckSection';

const PreferenceStep1Form = (
  props: DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>
) => (
  <form {...props}>
    <PaddingWrapper>
      <DescriptionSection />
      <CheckSection />
    </PaddingWrapper>
  </form>
);

export default PreferenceStep1Form;
