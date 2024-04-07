import LogoContainer from '@/domains/home/components/LogoContainer';
import Banner from '@/domains/home/components/Banner';
import Search from '@/domains/home/components/Search';
import ServerCategory from '@/domains/home/components/Category';
import ServerProducts from '@/domains/home/components/Products';

export default function Home() {
  return (
    <>
      <LogoContainer />
      <Search />
      <Banner />
      <ServerCategory />
      <ServerProducts />
    </>
  );
}
