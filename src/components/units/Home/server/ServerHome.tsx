import Banner from '../client/Banner';
import Search from '../client/Search';
import ServerCategory from './ServerCategory';

const ServerHome = () => {
    return (
        <>
            <Search />
            <Banner />
            <ServerCategory />
        </>
    );
};

export default ServerHome;
