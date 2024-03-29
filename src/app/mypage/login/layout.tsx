import Header from '@/components/commons/header/client/Header';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header back />
      {children}
    </>
  );
};

export default Layout;
