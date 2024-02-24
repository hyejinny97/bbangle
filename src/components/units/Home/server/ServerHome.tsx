import LogoContainer from '@/components/units/Home/client/LogoContainer';
import Banner from '../client/Banner';
import Search from '../client/Search';
import ServerCategory from './ServerCategory';
import ServerProducts from './ServerProducts';

const ServerHome = () => {
  return (
    <>
      <LogoContainer />
      <Search />
      <Banner />
      <ServerCategory />
      <ServerProducts />
    </>
  );
};

export default ServerHome;
