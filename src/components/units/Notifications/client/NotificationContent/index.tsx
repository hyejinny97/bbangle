interface NotificationContentProps {
  content: string;
}

const NotificationContent = ({ content }: NotificationContentProps) => {
  return (
    <div className="p-4 leading-normal text-[14px] text-color-Gray900 font-normal">{content}</div>
  );
};

export default NotificationContent;
