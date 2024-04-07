import LogoContainer from '@/shared/components/HomeLogoIcon';
import Banner from '@/blocks/home/Banner';
import Search from '@/blocks/home/Search';
import CategorySection from '@/blocks/home/CategorySection';
import BestProductsSection from '@/blocks/home/BestProductsSection';

export default function Home() {
  return (
    <>
      <LogoContainer />
      <Search />
      <Banner />
      <CategorySection />
      <BestProductsSection />
    </>
  );
}
