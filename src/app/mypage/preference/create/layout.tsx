import { PREFERENCE_PROVIDER_DEFAULT_VALUE } from '@/domains/user/constants/preference';
import DefaultLayout from '@/shared/components/DefaultLayout';
import Header from '@/shared/components/Header';
import PreferenceStep1FormProvider from '../_blocks/PreferenceStep1FormProvider';
import PreferenceStep2FormProvider from '../_blocks/PreferenceStep2FormProvider';
import ButtonSection from './_blocks/ButtonSection';

interface PreferenceCreateLayoutProps {
  children: React.ReactNode;
}

const PreferenceCreateLayout = ({ children }: PreferenceCreateLayoutProps) => (
  <PreferenceStep1FormProvider defaultValues={PREFERENCE_PROVIDER_DEFAULT_VALUE.step1}>
    <PreferenceStep2FormProvider defaultValues={PREFERENCE_PROVIDER_DEFAULT_VALUE.step2}>
      <DefaultLayout
        header={<Header title="맞춤 추천 받기" />}
        main={children}
        footer={<ButtonSection />}
      />
    </PreferenceStep2FormProvider>
  </PreferenceStep1FormProvider>
);

export default PreferenceCreateLayout;
