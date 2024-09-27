import DefaultLayout from '@/shared/components/DefaultLayout';
import Header from '@/shared/components/Header';
import PreferenceStep1FormProvider from '../_blocks/PreferenceStep1FormProvider';
import PreferenceStep2FormProvider from '../_blocks/PreferenceStep2FormProvider';
import ButtonSection from './_blocks/ButtonSection';

interface PreferenceCreateLayoutProps {
  children: React.ReactNode;
}

const PreferenceCreateLayout = ({ children }: PreferenceCreateLayoutProps) => (
  <PreferenceStep1FormProvider defaultValues={{ preferenceType: [] }}>
    <PreferenceStep2FormProvider defaultValues={{ preferenceType: [] }}>
      <DefaultLayout
        header={<Header title="맞춤 추천 받기" />}
        main={children}
        footer={<ButtonSection />}
      />
    </PreferenceStep2FormProvider>
  </PreferenceStep1FormProvider>
);

export default PreferenceCreateLayout;
