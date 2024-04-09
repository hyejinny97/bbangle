import Header from '@/components/commons/header/client/Header';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Header back />
    {children}
  </>
);

export default Layout;
