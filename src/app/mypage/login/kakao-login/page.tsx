import KakaoLoginLoading from '@/domains/user/components/KakaoLoginLoading';
import { Suspense } from 'react';

const KakaoLoginLoadingPage = () => (
  <Suspense>
    <KakaoLoginLoading />
  </Suspense>
);

export default KakaoLoginLoadingPage;
