import Banner from '../client/Banner';
import Search from '../client/Search';
import ServerCategory from './ServerCategory';
import ServerProducts from './ServerProducts';

const ServerHome = () => {
    return (
        <>
            <Search />
            <Banner />
            <ServerCategory />
            <ServerProducts />
        </>
    );
};

export default ServerHome;
