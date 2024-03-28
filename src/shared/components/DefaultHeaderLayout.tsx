import Header from '@/components/commons/header/client/Header';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
  back: boolean;
}

const DefaultHeaderLayout = ({ children, title, back }: Props) => {
  return (
    <>
      <Header title={title} back={back} />
      {children}
    </>
  );
};

export default DefaultHeaderLayout;
