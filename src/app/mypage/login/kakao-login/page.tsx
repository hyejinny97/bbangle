import KakaoLoginLoading from '@/domains/user/components/KakaoLoginLoading';
import { Suspense } from 'react';

const KakaoLoginLoadingPage = () => {
  return (
    <Suspense>
      <KakaoLoginLoading />
    </Suspense>
  );
};

export default KakaoLoginLoadingPage;
