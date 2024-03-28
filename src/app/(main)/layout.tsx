import HeaderAndTab from '@/components/units/(main)/client/HeaderAndTab';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderAndTab />
      {children}
    </>
  );
};

export default MainLayout;
