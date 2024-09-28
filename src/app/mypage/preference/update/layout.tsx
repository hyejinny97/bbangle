import DefaultLayout from '@/shared/components/DefaultLayout';
import Header from '@/shared/components/Header';
import { transformDataToAtomFormat } from '@/domains/user/utils/transformPreference';
import userService from '@/domains/user/queries/service';
import PreferenceStep1FormProvider from '../_blocks/PreferenceStep1FormProvider';
import PreferenceStep2FormProvider from '../_blocks/PreferenceStep2FormProvider';
import ButtonSection from './_blocks/ButtonSection';

interface PreferenceUpdateLayoutProps {
  children: React.ReactNode;
}

const PreferenceUpdateLayout = async ({ children }: PreferenceUpdateLayoutProps) => {
  const data = await userService.getPreference();
  const preferenceType = transformDataToAtomFormat(data);

  // TODO
  return (
    <PreferenceStep1FormProvider defaultValues={{ preferenceType }}>
      <PreferenceStep2FormProvider
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
      </PreferenceStep2FormProvider>
    </PreferenceStep1FormProvider>
  );
};

export default PreferenceUpdateLayout;
