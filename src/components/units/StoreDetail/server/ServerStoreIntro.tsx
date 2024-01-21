import ServerBestProducts from './ServerBestProducts';
import ServerAllProducts from './ServerAllProducts';
import StoreProfile from '../client/StoreProfile';

const ServerStoreIntro = () => {
    return (
        <>
            <div className="border-b-4 pb-[16px] border-solid border-gray-100">
                <StoreProfile />
            </div>
            <ServerBestProducts />
            <ServerAllProducts />
        </>
    );
};
export default ServerStoreIntro;
