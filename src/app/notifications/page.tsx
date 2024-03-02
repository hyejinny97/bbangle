import Link from 'next/link';
import NotificationTitle from '@/components/units/Notifications/client/NotificationTitle';
import { fetchAllNotifications } from '@/components/units/Notifications/api/fetchAllNotifications';

const Notifications = async () => {
  const notifications = await fetchAllNotifications();

  return (
    <div>
      {notifications.map(item => (
        <Link key={item.id} href={`/notifications/${item.id}`}>
          <NotificationTitle title={item.title} date={item.createdAt} />
        </Link>
      ))}
    </div>
  );
};

export default Notifications;
