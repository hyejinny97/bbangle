import Link from 'next/link';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { BbangleIcon } from './icons';

const LogoContainer = () => (
  <PaddingWrapper className="pt-[10px] pb-[0px] bg-white">
    <h1>
      <Link href="/">
        <BbangleIcon shape="horizontal-name" />
      </Link>
    </h1>
  </PaddingWrapper>
);

export default LogoContainer;
