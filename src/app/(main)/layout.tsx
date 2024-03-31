import MainHeader from '@/components/units/(main)/client/MainHeader';
import MainTab from '@/components/units/(main)/client/MainTab';

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
