import Header from '@/components/commons/header/client/Header';
import ServerUserInfo from '@/components/units/MyPage/server/ServerUserInfo';
import ServerSignIn from '@/components/units/MyPage/server/ServerSignIn';
import ServerMoreInfo from '@/components/units/MyPage/server/ServerMoreInfo';
import SeparateLine from '@/components/units/MyPage/client/SeparateLine';

const IsLoggedIn = false;

const ServerMyPage = () => {
    return (
        <>
            <Header title="마이페이지" />
            {IsLoggedIn ? <ServerUserInfo /> : <ServerSignIn />}
            <SeparateLine />
            <ServerMoreInfo />
        </>
    );
};

export default ServerMyPage;
