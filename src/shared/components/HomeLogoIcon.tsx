import Link from 'next/link';
import Logo from '@/shared/assets/logo.svg';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

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
