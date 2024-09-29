import { RECOMMENDATION_PROVIDER_DEFAULT_VALUE } from '@/domains/user/constants/recommendation';
import DefaultLayout from '@/shared/components/DefaultLayout';
import Header from '@/shared/components/Header';
import RecommendationStep1FormProvider from '../_blocks/RecommendationStep1FormProvider';
import RecommendationStep2FormProvider from '../_blocks/RecommendationStep2FormProvider';
import ButtonSection from './_blocks/ButtonSection';

interface RecommendationCreateLayoutProps {
  children: React.ReactNode;
}

const RecommendationCreateLayout = ({ children }: RecommendationCreateLayoutProps) => (
  <RecommendationStep1FormProvider defaultValues={RECOMMENDATION_PROVIDER_DEFAULT_VALUE.step1}>
    <RecommendationStep2FormProvider defaultValues={RECOMMENDATION_PROVIDER_DEFAULT_VALUE.step2}>
      <DefaultLayout
        header={<Header title="맞춤 추천 받기" />}
        main={children}
        footer={<ButtonSection />}
      />
    </RecommendationStep2FormProvider>
  </RecommendationStep1FormProvider>
);

export default RecommendationCreateLayout;
