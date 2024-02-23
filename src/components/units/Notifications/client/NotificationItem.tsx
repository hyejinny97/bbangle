import Link from 'next/link';

interface NotificationItemProps {
    id: number;
    title: string;
    date: string;
}

const NotificationItem = ({ id, title, date }: NotificationItemProps) => {
    return (
        <Link href={`/notifications/${id}`}>
            <div className="p-4 border-solid border-b border-color-Gray100 leading-normal">
                <p className="mb-[2px] text-[14px] text-color-Gray900 font-medium">{title}</p>
                <p className="text-[12px] text-color-Gray500 font-normal">{date}</p>
            </div>
        </Link>
    );
};

export default NotificationItem;
