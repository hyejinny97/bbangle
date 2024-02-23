import NotificationTitle from '@/components/units/Notifications/client/NotificationTitle';
import NotificationContent from '@/components/units/Notifications/client/NotificationContent';

const NOTIFICATION = {
    id: 1,
    title: '개인정보 처리방침 개정 안내',
    date: '2024.02.23',
    content: '개인정보 처리방침 개정 안내 관련 내용이 들어갑니다.'
};

const NotificationDetail = () => {
    return (
        <div>
            <NotificationTitle title={NOTIFICATION.title} date={NOTIFICATION.date} isBigTitle />
            <NotificationContent content={NOTIFICATION.content} />
        </div>
    );
};

export default NotificationDetail;
