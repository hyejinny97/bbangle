import ServerBestProducts from './ServerBestProducts';
import ServerAllProducts from './ServerAllProducts';
import StoreProfile from '../client/StoreProfile';

const ServerStoreDetail = () => {
    return (
        <div className="w-full">
            <div className="border-b-4 w-full mx-auto pb-[16px] border-solid border-gray-100">
                <StoreProfile />
            </div>
            <ServerBestProducts />
            <ServerAllProducts />
        </div>
    );
};
export default ServerStoreDetail;
