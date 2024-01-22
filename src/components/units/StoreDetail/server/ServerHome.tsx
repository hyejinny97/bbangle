import Header from '@/components/commons/header/server/Header';
import ServerStoreDetail from './ServerStoreDetail';

const ServerHome = () => {
    return (
        <>
            <Header title="스토어" />
            <ServerStoreDetail />
        </>
    );
};
export default ServerHome;
