import Header from '@/components/commons/header/client/Header';
// import ServerAllProducts from './ServerAllProducts';
// import ServerBestProducts from './ServerBestProducts';
import ServerProducts from './ServerProducts';

const ServerStoreDetail = () => {
    return (
        <>
            <Header title="스토어" back={true} />
            {/* <ServerAllProducts />
            <ServerBestProducts /> */}
            <ServerProducts />
        </>
    );
};
export default ServerStoreDetail;
