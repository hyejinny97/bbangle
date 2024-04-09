'use client';

import Link from 'next/link';
import { chatKakaoChannel } from '@/commons/utils/chatKakaoChannel';
import PaddingWrapper from '@/components/commons/PaddingWrapper';
import { useRecoilValue } from 'recoil';
import { isLoggedinState } from '@/shared/atoms/login';
import PATH from '@/shared/constants/path';
import { BellIcon, DocIcon, InquiryIcon, LockIcon } from '@/domains/user/components/icons';

interface MoreInfoItemProps {
  icon: React.ReactNode;
  content: string;
}

const INFOS = [
  { href: PATH.notification, icon: <BellIcon />, content: '공지사항' },
  { href: PATH.serviceTerm, icon: <DocIcon />, content: '서비스 이용 약관' },
  { href: PATH.privacyPolicy, icon: <LockIcon />, content: '개인정보 수집 및 이용' },
  { href: '#', icon: <InquiryIcon />, content: '문의하기' }
];

const MoreInfoItem = ({ icon, content }: MoreInfoItemProps) => (
  <PaddingWrapper className="flex items-center gap-[8px] border-solid border-b-[1px] border-gray-100">
    {icon}
    <p className="ml-[8px] text-[14px] font-medium">{content}</p>
  </PaddingWrapper>
);

const MoreInfoSection = () => {
  const isLoggedIn = useRecoilValue(isLoggedinState);
  const information = isLoggedIn ? INFOS : INFOS.slice(0, INFOS.length - 1);

  return (
    <div>
      {information.map(({ href, icon, content }) => (
        <Link
          key={content}
          href={href}
          onClick={() => {
            if (content === '문의하기') chatKakaoChannel();
          }}
        >
          <MoreInfoItem icon={icon} content={content} />
        </Link>
      ))}
    </div>
  );
};

export default MoreInfoSection;
