import Header from '@/components/commons/header/server/Header';
import ServerWishListDetail from './ServerWishListDetail';

const ServerHome = async () => {
    return (
        <>
            <Header title="찜 상세(임시)" />
            <ServerWishListDetail />
        </>
    );
};

export default ServerHome;
