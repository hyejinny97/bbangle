import DefaultLayout from '@/shared/components/DefaultLayout';
import Header from '@/shared/components/Header';
import { transformDataToAtomFormat } from '@/domains/user/utils/transformPreference';
import userService from '@/domains/user/queries/service';
import RecommendationStep1FormProvider from '../_blocks/RecommendationStep1FormProvider';
import RecommendationStep2FormProvider from '../_blocks/RecommendationStep2FormProvider';
import ButtonSection from './_blocks/ButtonSection';

interface RecommendationUpdateLayoutProps {
  children: React.ReactNode;
}

const RecommendationUpdateLayout = async ({ children }: RecommendationUpdateLayoutProps) => {
  const data = await userService.getRecommendationStep1();
  const preferenceType = transformDataToAtomFormat(data);

  // TODO
  return (
    <RecommendationStep1FormProvider defaultValues={{ preferenceType }}>
      <RecommendationStep2FormProvider
        defaultValues={{
          dietLimitation: [],
          healthConcerns: [],
          hateFoodList: [],
          isVegetarians: []
        }}
      >
        <DefaultLayout
          header={<Header title="맞춤 추천 수정하기" />}
          main={children}
          footer={<ButtonSection />}
        />
      </RecommendationStep2FormProvider>
    </RecommendationStep1FormProvider>
  );
};

export default RecommendationUpdateLayout;
