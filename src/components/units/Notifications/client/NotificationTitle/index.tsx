interface NotificationTitleProps {
  title: string;
  date: string;
  isBigTitle?: boolean;
}

const NotificationTitle = ({ title, date, isBigTitle = false }: NotificationTitleProps) => {
  return (
    <div className="p-4 border-solid border-b border-color-Gray100 leading-normal">
      <p
        className={`mb-[2px] ${
          isBigTitle ? 'text-[16px]' : 'text-[14px]'
        } text-color-Gray900 font-medium`}
      >
        {title}
      </p>
      <p className="text-[12px] text-color-Gray500 font-normal">{date}</p>
    </div>
  );
};

export default NotificationTitle;
