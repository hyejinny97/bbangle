import Header from '@/components/commons/header/client/Header';
import UserInfo from '@/components/units/(mypage)/MyPage/client/UserInfo';
import MoreInfo from '@/components/units/(mypage)/MyPage/client/MoreInfo';
import SeparateLine from '@/components/units/(mypage)/MyPage/client/SeparateLine';
import LoginSection from '@/components/units/(mypage)/MyPage/client/LoginSection';
import { getCookie } from '@/action';

const MyPage = async () => {
  const accessToken = await getCookie('accessToken');
  const isLoggedIn = !!accessToken;

  return (
    <>
      <Header title="마이페이지" />
      {isLoggedIn ? <UserInfo /> : <LoginSection />}
      <SeparateLine />
      <MoreInfo />
    </>
  );
};

export default MyPage;
