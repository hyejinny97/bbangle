import { useEffect, useState } from 'react';
import './index.css';
import Link from 'next/link';

interface IToastPopProps {
  content: string;
  isAddWish?: boolean;
}

const ToastPop = ({ content, isAddWish }: IToastPopProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // 3초 후에 사라지도록 설정 (원하는 시간으로 변경 가능)

    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <div className="toast-pop">
        <span className="text-sm text-white">{content}</span>
        {isAddWish && (
          <Link href="/wishlist" className="text-xs text-white underline">
            편집
          </Link>
        )}
      </div>
    )
  );
};

export default ToastPop;
