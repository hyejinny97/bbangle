import IconBell from '@/components/units/MyPage/client/IconBell';
import IconDoc from '@/components/units/MyPage/client/IconDoc';
import IconLock from '@/components/units/MyPage/client/IconLock';
import IconInquiry from '@/components/units/MyPage/client/IconInquiry';

interface ServerMoreInfoItemProps {
    icon: React.ReactNode;
    content: string;
}

const isLoggedIn = false;

const INFOS = [
    { icon: <IconBell />, content: '공지사항' },
    { icon: <IconDoc />, content: '서비스 이용 약관' },
    { icon: <IconLock />, content: '개인정보 수집 및 이용' },
    { icon: <IconInquiry />, content: '문의하기' }
];

const ServerMoreInfoItem = ({ icon, content }: ServerMoreInfoItemProps) => {
    return (
        <div className="flex items-center p-4 border-solid border-b-[1px] border-color-Gray100">
            {icon}
            <p className="ml-[8px] text-[14px] font-medium">{content}</p>
        </div>
    );
};

const ServerMoreInfo = () => {
    const information = isLoggedIn ? INFOS : INFOS.slice(0, INFOS.length - 1);

    return (
        <div>
            {information.map(item => (
                <ServerMoreInfoItem key={item.content} icon={item.icon} content={item.content} />
            ))}
        </div>
    );
};

export default ServerMoreInfo;
