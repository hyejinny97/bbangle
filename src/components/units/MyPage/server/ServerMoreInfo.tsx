import Link from 'next/link';
import { IconBell, IconDoc, IconLock, IconInquiry } from '@/components/units/MyPage/client/Icons';

interface ServerMoreInfoItemProps {
    href: string;
    icon: React.ReactNode;
    content: string;
}

const isLoggedIn = false;

const INFOS = [
    { href: '/notifications', icon: <IconBell />, content: '공지사항' },
    { href: '/service-terms', icon: <IconDoc />, content: '서비스 이용 약관' },
    { href: '/privacy-policy', icon: <IconLock />, content: '개인정보 수집 및 이용' },
    { href: '', icon: <IconInquiry />, content: '문의하기' }
];

const ServerMoreInfoItem = ({ href, icon, content }: ServerMoreInfoItemProps) => {
    return (
        <Link href={href}>
            <div className="flex items-center p-4 border-solid border-b-[1px] border-color-Gray100">
                {icon}
                <p className="ml-[8px] text-[14px] font-medium">{content}</p>
            </div>
        </Link>
    );
};

const ServerMoreInfo = () => {
    const information = isLoggedIn ? INFOS : INFOS.slice(0, INFOS.length - 1);

    return (
        <div>
            {information.map(item => (
                <ServerMoreInfoItem
                    key={item.content}
                    href={item.href}
                    icon={item.icon}
                    content={item.content}
                />
            ))}
        </div>
    );
};

export default ServerMoreInfo;
