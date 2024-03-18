import Header from '@/components/commons/header/client/Header';
import ServerUserInfo from '@/components/units/(mypage)/MyPage/server/ServerUserInfo';
import ServerSignIn from '@/components/units/(mypage)/MyPage/server/ServerSignIn';
import ServerMoreInfo from '@/components/units/(mypage)/MyPage/server/ServerMoreInfo';
import ServerKaKaoChatScript from '@/components/units/(mypage)/MyPage/server/ServerKaKaoChatScript';
import SeparateLine from '@/components/units/(mypage)/MyPage/client/SeparateLine';

const IsLoggedIn = false;

const MyPage = () => {
  return (
    <>
      <Header title="마이페이지" />
      {IsLoggedIn ? <ServerUserInfo /> : <ServerSignIn />}
      <SeparateLine />
      <ServerMoreInfo />
      <ServerKaKaoChatScript />
    </>
  );
};

export default MyPage;
