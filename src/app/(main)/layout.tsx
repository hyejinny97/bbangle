import MainHeader from '@/blocks/product/MainHeader';
import MainTab from '@/blocks/product/MainTab';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainHeader />
      <MainTab />
      {children}
    </>
  );
};

export default MainLayout;
