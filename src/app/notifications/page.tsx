import NotificationItem from '@/components/units/Notifications/client/NotificationItem';

const NOTIFICATIONS = [
    { id: 1, title: '개인정보 처리방침 개정 안내', date: '2024.02.23' },
    { id: 2, title: '오픈 이벤트', date: '2024.02.22' },
    { id: 3, title: '빵그리의 오븐 소개', date: '2024.02.21' }
];

const Notifications = () => {
    return (
        <div>
            {NOTIFICATIONS.map(item => (
                <NotificationItem key={item.id} id={item.id} title={item.title} date={item.date} />
            ))}
        </div>
    );
};

export default Notifications;
