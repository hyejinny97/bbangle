'use client';

import Link from 'next/link';
import Logo from '@/domains/home/assets/logo.svg';
import PaddingWrapper from '@/components/commons/PaddingWrapper';

const LogoContainer = () => (
    <PaddingWrapper className="pt-[10px] pb-[0px] bg-white">
      <h1>
        <Link href="/">
          <Logo />
        </Link>
      </h1>
    </PaddingWrapper>
  );

export default LogoContainer;
